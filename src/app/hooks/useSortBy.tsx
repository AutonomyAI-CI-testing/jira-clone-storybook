import { useSearchParams } from "react-router";
import { Sort, isValidSort } from "@domain/filter/filter";

export const useSortBy = (): Sort | null => {
  const [searchParams] = useSearchParams();
  const sortByParam = searchParams.get("sortBy") as string;
  const sortBy = isValidSort(sortByParam) ? sortByParam : null;

  return sortBy;
};
