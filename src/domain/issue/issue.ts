import { User } from "@domain/user";
import { CategoryType } from "@domain/category";
import { Comment } from "@domain/comment";
import { Priority } from "@domain/priority";

export type IssueId = string;
export interface Issue {
  id: IssueId;
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
