import { Filter, FILTER_PARAM, toFilterId } from "@domain/filter/filter";

interface IssueLinkParams {
  category?: string;
  sortBy?: string | null;
  filters: Filter[];
}

export const buildIssueLink = (path: string, params: IssueLinkParams): string => {
  const searchParams = new URLSearchParams();

  if (params.category) {
    searchParams.set("category", params.category);
  }

  if (params.sortBy) {
    searchParams.set("sortBy", params.sortBy);
  }

  params.filters.forEach((filter) =>
    searchParams.append(FILTER_PARAM, toFilterId(filter.type, filter.value))
  );

  const query = searchParams.toString();

  return query.length > 0 ? `${path}?${query}` : path;
};
