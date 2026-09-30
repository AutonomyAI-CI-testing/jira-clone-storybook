import { Prisma } from "@prisma/client";

import { UserId } from "@domain/user";
import { Project, ProjectSummary, ProjectId } from "@domain/project";
import { Category, CategoryType } from "@domain/category";
import { Priority } from "@domain/priority";
import { Sort } from "@domain/filter";
import { Issue } from "@domain/issue";
import { db } from "./db.server";
import { dnull } from "src/utils/dnull";

export const getProject = async (
  projectId: ProjectId,
  options?: GetProjectOptions
): Promise<Project | null> => {
  type PrismaSortType = Prisma.Enumerable<Prisma.IssueOrderByWithRelationInput>;

  const sortIssuesBy = options?.sortIssuesBy;
  const sortByDate: PrismaSortType = {
    createdAt: "desc",
  };
  const sortByPriority: PrismaSortType = {
    priority: {
      order: "desc",
    },
  };

  // Sorting by title ignores case, which the database collation cannot do, so
  // the query only breaks ties there and the alphabetical order is applied to
  // the fetched issues (see sortIssuesAlphabetically).
  // prettier-ignore
  const orderBy: PrismaSortType =
    sortIssuesBy === "date" ? [sortByDate, sortByPriority]
    : [sortByDate];

  const projectDb = await db.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      users: {
        orderBy: {
          name: "asc",
        },
      },
      categories: {
        include: {
          issues: {
            select: {
              id: true,
              name: true,
              priority: true,
              createdAt: true,
              reporter: true,
              asignee: true,
            },
            orderBy: orderBy,
          },
        },
      },
    },
  });

  if (!projectDb) {
    return null;
  }

  const project: Project = {
    id: projectDb.id,
    users: projectDb.users.map(dnull),
    name: projectDb.name,
    description: projectDb.description || "",
    image: projectDb.image,
    categories: projectDb.categories.map((category) => ({
      id: category.id,
      name: category.name,
      type: category.type as CategoryType,
      order: category.order,
      issues: sortIssuesAlphabetically(
        category.issues.map((issue) => ({
          id: issue.id,
          name: issue.name,
          priority: issue.priority as Priority,
          reporter: dnull(issue.reporter),
          asignee: dnull(issue.asignee),
          comments: [],
          createdAt: issue.createdAt.getDate(),
          updatedAt: issue.createdAt.getDate(),
        })),
        sortIssuesBy
      ),
    })),
    createdAt: projectDb.createdAt.getDate(),
    updatedAt: projectDb.updatedAt.getDate(),
  };

  return project;
};

interface GetProjectOptions {
  sortIssuesBy: Sort;
}

// Sorting by title ignores case, which the database collation cannot do, so it is
// applied to the fetched issues instead of the query. The sort is stable, so
// issues sharing a title keep the order the query returned them in.
const sortIssuesAlphabetically = (issues: Issue[], sortIssuesBy?: Sort): Issue[] =>
  sortIssuesBy !== "title"
    ? issues
    : [...issues].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );

export const getProjectSummary = async (projectId: ProjectId): Promise<ProjectSummary | null> => {
  const projectSummaryDb = await db.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      createdAt: true,
    },
  });

  if (!projectSummaryDb) {
    return null;
  }

  const projectSummary: ProjectSummary = {
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    description: projectSummaryDb.description || "",
    image: projectSummaryDb.image,
    createdAt: projectSummaryDb.createdAt.getDate(),
  };

  return projectSummary;
};

export const getProjectsSummary = async (userId: UserId): Promise<ProjectSummary[]> => {
  const projectsSummaryDb = await db.project.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const projectsSummary: ProjectSummary[] = projectsSummaryDb.map((projectSummaryDb) => ({
    id: projectSummaryDb.id,
    name: projectSummaryDb.name,
    image: projectSummaryDb.image,
    description: projectSummaryDb.description || "",
    createdAt: projectSummaryDb.createdAt.getDate(),
  }));

  return projectsSummary;
};

type CreateProjectInput = {
  name: string;
  description: string;
  image: string;
  userIds: UserId[];
  categories: Omit<Category, "id">[];
};
export const createProject = async (project: CreateProjectInput): Promise<void> => {
  await db.project.create({
    data: {
      name: project.name,
      description: project.description,
      image: project.image,
      categories: {
        create: project.categories.map((category) => ({
          name: category.name,
          type: category.type,
          order: category.order,
        })),
      },
      users: {
        connect: project.userIds.map((userId) => ({ id: userId })),
      },
    },
    include: {
      categories: true,
      users: true,
    },
  });
};

export const deleteProject = async (projectId: ProjectId): Promise<void> => {
  await db.project.delete({
    where: {
      id: projectId,
    },
  });
};
