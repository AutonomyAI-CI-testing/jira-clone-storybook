import { useSearchParams } from "react-router";
import {
  IssueFilterParam,
  IssueFilters,
  parseIssueFilters,
} from "@domain/filter/filter";

interface UseIssueFilters {
  filters: IssueFilters;
  setFilter: (param: IssueFilterParam, value: string | null) => void;
}

export const useIssueFilters = (): UseIssueFilters => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = parseIssueFilters(searchParams);

  const setFilter = (param: IssueFilterParam, value: string | null): void => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(param, value);
    } else {
      nextParams.delete(param);
    }

    setSearchParams(nextParams);
  };

  return { filters, setFilter };
};
