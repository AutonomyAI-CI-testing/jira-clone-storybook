export type PriorityId = "low" | "medium" | "high";
export type Priority = {
  id: PriorityId;
  name: string;
  order: number;
};

export const DEFAULT_PRIORITY_ID: PriorityId = "low";
