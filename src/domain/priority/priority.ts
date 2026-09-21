export type PriorityId = "low" | "medium" | "high";
export type Priority = {
  id: PriorityId;
  name: string;
  order: number;
};

export const priorityLabelDict: Record<PriorityId, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
