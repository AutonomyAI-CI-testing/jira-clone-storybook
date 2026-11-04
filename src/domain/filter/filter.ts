import { PriorityId, isValidPriorityId } from "@domain/priority/priority";
import { UserId } from "@domain/user/user";

export const sorts = ["date", "priority"] as const;
export const DEFAULT_SORT: Sort = "date";

export type Sort = (typeof sorts)[number];
type SortDict = Record<Sort, string>;
type SortItem = {
  id: Sort;
  label: string;
};
export type SortList = SortItem[];

export const sortDict: SortDict = {
  date: "Date",
  priority: "Priority",
};

export const sortList: SortList = (Object.entries(sortDict) as [Sort, string][]).map(
  ([key, value]) => ({
    id: key,
    label: value,
  })
);

export const isValidSort = (sort: string): sort is Sort => sorts.includes(sort as Sort);

export const issueFilterParams = ["priority", "assignee"] as const;

export type IssueFilterParam = (typeof issueFilterParams)[number];

export type IssueFilters = {
  priority: PriorityId | null;
  assignee: UserId | null;
};

export const defaultIssueFilters: IssueFilters = {
  priority: null,
  assignee: null,
};

/**
 * Reads the issue filters carried in the URL. Board filters live in the query
 * string, so a filtered board can be shared or reloaded as it is.
 */
export const parseIssueFilters = (searchParams: URLSearchParams): IssueFilters => {
  const priorityParam = searchParams.get("priority") as string;
  const assigneeParam = searchParams.get("assignee") as string;

  return {
    priority: isValidPriorityId(priorityParam) ? priorityParam : null,
    assignee: assigneeParam || null,
  };
};

/**
 * The sort and issue filters a board URL carries, so a link into the board
 * keeps the view the user was working in.
 */
export const boardSearchParams = (searchParams: URLSearchParams): URLSearchParams => {
  const params = new URLSearchParams();
  const sortByParam = searchParams.get("sortBy") as string;
  const filters = parseIssueFilters(searchParams);

  if (isValidSort(sortByParam)) {
    params.set("sortBy", sortByParam);
  }

  if (filters.priority) {
    params.set("priority", filters.priority);
  }

  if (filters.assignee) {
    params.set("assignee", filters.assignee);
  }

  return params;
};

export const boardQueryString = (searchParams: URLSearchParams): string => {
  const query = boardSearchParams(searchParams).toString();

  return query ? `?${query}` : "";
};
