export const priorityIds = ["low", "medium", "high"] as const;

export type PriorityId = (typeof priorityIds)[number];
export type Priority = {
  id: PriorityId;
  name: string;
  order: number;
};

export const isValidPriorityId = (priority: string): priority is PriorityId =>
  priorityIds.includes(priority as PriorityId);
