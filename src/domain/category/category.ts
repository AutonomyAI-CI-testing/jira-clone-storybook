import { Issue } from "@domain/issue/issue";

export type CategoryId = string;
export type CategoryType = (typeof categoryTypes)[number];
export const categoryTypes = ["TODO", "IN_PROGRESS", "DONE"] as const;

export const categoryTypeDict: Record<CategoryType, string> = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

export interface Category {
  id: CategoryId;
  type: CategoryType;
  name: string;
  issues: Issue[];
  order: number;
  // How many issues the column holds before the board's filters narrow it;
  // absent when the column was read without a count.
  issueCount?: number;
  createdAt?: number;
  updatedAt?: number;
}
