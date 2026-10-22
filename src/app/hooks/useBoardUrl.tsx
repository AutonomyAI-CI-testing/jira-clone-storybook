import { useLocation } from "react-router";
import { useSortBy } from "./useSortBy";

/**
 * The board URL to return to from the issue panel, carrying the board's sort
 * order with it so closing a panel does not silently reset the sort.
 */
export const useBoardUrl = (): string => {
  const location = useLocation();
  const sortBy = useSortBy();
  const boardPath = location.pathname.split("/issue")[0];

  return sortBy ? `${boardPath}?sortBy=${sortBy}` : boardPath;
};
