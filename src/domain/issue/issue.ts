import { User, UserId } from "../user/user";
import { CategoryType } from "@domain/category/category";
import { Comment } from "../comment/comment";
import { Priority } from "../priority/priority";

export type IssueId = string;
export interface Issue {
  id: UserId;
  name: string;
  description?: string;
  categoryType?: CategoryType;
  reporter: User;
  asignee: User;
  comments: Comment[];
  priority: Priority;
  // The team's estimate in story points, and whether the issue is in the
  // project's sprint. Only the sprint planning read fills them in.
  storyPoints?: number;
  inSprint?: boolean;
  createdAt: number;
  updatedAt: number;
}
