import { Prisma } from "@prisma/client";
import { IssueId } from "@domain/issue/issue";
import { ProjectId } from "@domain/project/project";
import { Priority } from "@domain/priority/priority";
import { SprintIssue, SprintPlanning } from "@domain/sprint/sprint";
import { db } from "./db.server";

type SprintIssueDb = Prisma.IssueGetPayload<{
  select: {
    id: true;
    name: true;
    priority: true;
    storyPoints: true;
  };
}>;

const toSprintIssue = (issue: SprintIssueDb): SprintIssue => ({
  id: issue.id,
  name: issue.name,
  priority: issue.priority as Priority,
  storyPoints: issue.storyPoints ?? undefined,
});

/**
 * The project's current sprint and the issues waiting outside it. Both lists
 * come back most urgent first, so the top of each one is the work to look at.
 */
export const getSprintPlanning = async (projectId: ProjectId): Promise<SprintPlanning | null> => {
  const projectDb = await db.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      sprintCapacityPoints: true,
      sprintStartedAt: true,
    },
  });

  if (!projectDb) {
    return null;
  }

  const issuesDb = await db.issue.findMany({
    where: {
      category: {
        projectId,
      },
    },
    select: {
      id: true,
      name: true,
      priority: true,
      storyPoints: true,
      inSprint: true,
    },
    orderBy: [{ priority: { order: "desc" } }, { name: "asc" }],
  });

  return {
    capacityPoints: projectDb.sprintCapacityPoints,
    startedAt: projectDb.sprintStartedAt?.getTime(),
    sprint: issuesDb.filter((issue) => issue.inSprint).map(toSprintIssue),
    backlog: issuesDb.filter((issue) => !issue.inSprint).map(toSprintIssue),
  };
};

export const startSprint = async (projectId: ProjectId): Promise<void> => {
  await db.project.update({
    where: {
      id: projectId,
    },
    data: {
      sprintStartedAt: new Date(),
    },
  });
};

/**
 * Finishing a sprint empties it: its issues go back to the backlog, so the next
 * sprint is planned from the whole list.
 */
export const completeSprint = async (projectId: ProjectId): Promise<void> => {
  await db.issue.updateMany({
    where: {
      category: {
        projectId,
      },
      inSprint: true,
    },
    data: {
      inSprint: false,
    },
  });

  await db.project.update({
    where: {
      id: projectId,
    },
    data: {
      sprintStartedAt: null,
    },
  });
};

export const setIssueInSprint = async (issueId: IssueId, inSprint: boolean): Promise<void> => {
  await db.issue.update({
    where: {
      id: issueId,
    },
    data: {
      inSprint,
    },
  });
};
