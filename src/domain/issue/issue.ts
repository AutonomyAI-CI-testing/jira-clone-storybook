import { User, UserId } from "../user/user";
import { CategoryType } from "@domain/category/category";
import { Comment } from "../comment/comment";
import { Priority } from "../priority/priority";

export type IssueId = string;

/**
 * Issues are stored with uuid ids, but the board cards and the issue panel only
 * have room for the short form: the first group of the uuid.
 */
export const getIssueShortId = (id: IssueId): string => id.split("-")[0];

export interface Issue {
  id: UserId;
  name: string;
  description?: string;
  categoryType?: CategoryType;
  reporter: User;
  asignee: User;
  comments: Comment[];
  priority: Priority;
  createdAt: number;
  updatedAt: number;
}
