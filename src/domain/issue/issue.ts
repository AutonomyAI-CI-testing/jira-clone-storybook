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
  /**
   * Number of comments on the issue. The board only needs the number, so its
   * query returns the count and leaves `comments` empty; the issue panel is
   * the one place that loads the list itself.
   */
  commentsCount: number;
  priority: Priority;
  createdAt: number;
  updatedAt: number;
}
