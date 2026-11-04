import { Issue } from "@domain/issue/issue";
import { PriorityId } from "@domain/priority/priority";
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

/* Issue filters
 * The board's faceted filters. Each facet holds the values the user picked; an
 * empty list restricts nothing, so "no filters" is the all-empty state rather
 * than an "everything selected" one.
 *
 * The filters live in the query string, the board route reads them and the
 * database query applies them, so a filtered board can be shared or reloaded as
 * it is. Only the text search is client-side. */

export interface IssueFilters {
  priorities: PriorityId[];
  assignees: UserId[];
}

export const EMPTY_FILTERS: IssueFilters = {
  priorities: [],
  assignees: [],
};

export const priorityFilterParam = "priority";
export const assigneeFilterParam = "assignee";

export const parseIssueFilters = (searchParams: URLSearchParams): IssueFilters => ({
  priorities: searchParams.getAll(priorityFilterParam) as PriorityId[],
  assignees: searchParams.getAll(assigneeFilterParam) as UserId[],
});

export const countActiveFilters = (filters: IssueFilters): number =>
  filters.priorities.length + filters.assignees.length;

export const isFiltering = (filters: IssueFilters, search: string): boolean =>
  countActiveFilters(filters) > 0 || search.length > 0;

// The one narrowing the board does in the client; every filter is applied in
// the database query.
export const issueMatchesSearch = (issue: Issue, search: string): boolean =>
  issue.name.toLowerCase().includes(search);

// Every board control that narrows or orders the cards is a query-string
// parameter, so a link back to the board has to be rebuilt rather than written
// out by hand: a plain submit replaces the whole query string and would drop
// the other control's value.
export const boardSearchParams = (
  sortBy: Sort | null,
  filters: IssueFilters
): URLSearchParams => {
  const searchParams = new URLSearchParams();

  if (sortBy) {
    searchParams.set("sortBy", sortBy);
  }

  filters.priorities.forEach((priority) =>
    searchParams.append(priorityFilterParam, priority)
  );
  filters.assignees.forEach((assignee) =>
    searchParams.append(assigneeFilterParam, assignee)
  );

  return searchParams;
};

export const boardQueryString = (
  sortBy: Sort | null,
  filters: IssueFilters
): string => {
  const queryString = boardSearchParams(sortBy, filters).toString();

  return queryString ? `?${queryString}` : "";
};
