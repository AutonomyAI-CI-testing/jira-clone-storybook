import { Issue } from "@domain/issue/issue";

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

export const FILTER_PARAM = "filter";

export const filterTypes = ["assignee", "priority"] as const;
export type FilterType = (typeof filterTypes)[number];
type FilterTypeDict = Record<FilterType, string>;

export const filterTypeDict: FilterTypeDict = {
  assignee: "Assignee",
  priority: "Priority",
};

export type Filter = {
  type: FilterType;
  value: string;
};

const FILTER_ID_SEPARATOR = ":";

export const toFilterId = (type: FilterType, value: string): string =>
  `${type}${FILTER_ID_SEPARATOR}${value}`;

export const parseFilterId = (id: string): Filter | null => {
  const [type, ...value] = id.split(FILTER_ID_SEPARATOR);
  const filterValue = value.join(FILTER_ID_SEPARATOR);

  if (!filterTypes.includes(type as FilterType) || filterValue.length === 0) {
    return null;
  }

  return { type: type as FilterType, value: filterValue };
};

export const parseFilters = (ids: string[]): Filter[] =>
  ids.map(parseFilterId).filter((filter): filter is Filter => filter !== null);

export const isFilterOn = (filters: Filter[], filter: Filter): boolean =>
  filters.some(
    (current) => current.type === filter.type && current.value === filter.value
  );

export const toggleFilter = (filters: Filter[], filter: Filter): Filter[] =>
  isFilterOn(filters, filter)
    ? filters.filter(
        (current) =>
          !(current.type === filter.type && current.value === filter.value)
      )
    : [...filters, filter];

const filterValueOf = (issue: Issue, type: FilterType): string =>
  type === "assignee" ? issue.asignee.id : issue.priority.id;

// Several values inside one dimension are OR'd, the dimensions are AND'd
export const matchesFilters = (issue: Issue, filters: Filter[]): boolean =>
  filterTypes.every((type) => {
    const values = filters
      .filter((filter) => filter.type === type)
      .map((filter) => filter.value);

    return values.length === 0 || values.includes(filterValueOf(issue, type));
  });
