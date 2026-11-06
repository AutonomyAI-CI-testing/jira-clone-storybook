import { IssueId } from "@domain/issue/issue";
import { Priority } from "@domain/priority/priority";

/** An issue as the sprint planning page needs it: what it is called, how urgent
 *  it is, and the estimate the team gave it. */
export type SprintIssue = {
  id: IssueId;
  name: string;
  priority: Priority;
  storyPoints?: number;
};

/** The project's current sprint, and everything waiting outside it. */
export type SprintPlanning = {
  capacityPoints: number;
  startedAt?: number;
  sprint: SprintIssue[];
  backlog: SprintIssue[];
};

export type SprintCapacity = {
  committed: number;
  capacity: number;
  remaining: number;
  usedRatio: number;
  isOver: boolean;
};

// An issue nobody estimated counts as nothing: it is unsized, not free.
const committedPoints = (issues: SprintIssue[]): number =>
  issues.reduce((points, issue) => points + (issue.storyPoints || 0), 0);

export const getSprintCapacity = (
  capacityPoints: number,
  issues: SprintIssue[]
): SprintCapacity => {
  const committed = committedPoints(issues);
  const remaining = capacityPoints - committed;

  return {
    committed,
    capacity: capacityPoints,
    remaining,
    usedRatio: capacityPoints > 0 ? Math.min(committed / capacityPoints, 1) : 0,
    isOver: remaining < 0,
  };
};

/** A sprint only starts while it fits the capacity it was planned for. */
export const canStartSprint = (capacity: SprintCapacity): boolean => !capacity.isOver;
