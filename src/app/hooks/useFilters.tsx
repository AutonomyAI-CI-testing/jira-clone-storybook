import { useSearchParams } from "react-router";
import {
  Filter,
  FILTER_PARAM,
  parseFilters,
  toFilterId,
  toggleFilter as toggle,
} from "@domain/filter/filter";

interface FiltersStore {
  filters: Filter[];
  toggleFilter: (filter: Filter) => void;
  clearFilters: () => void;
}

export const useFilters = (): FiltersStore => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = parseFilters(searchParams.getAll(FILTER_PARAM));

  const setFilters = (nextFilters: Filter[]): void => {
    const nextSearchParams = new URLSearchParams(searchParams);

    nextSearchParams.delete(FILTER_PARAM);
    nextFilters.forEach((filter) =>
      nextSearchParams.append(FILTER_PARAM, toFilterId(filter.type, filter.value))
    );

    setSearchParams(nextSearchParams);
  };

  const toggleFilter = (filter: Filter): void => setFilters(toggle(filters, filter));

  const clearFilters = (): void => setFilters([]);

  return { filters, toggleFilter, clearFilters };
};
