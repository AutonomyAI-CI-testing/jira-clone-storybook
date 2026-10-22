import { CategoryType } from "@domain/category/category";

/**
 * The soft status chip used wherever a category is shown as a label — the
 * create panel's status select and the board's quick create menu. Colours come
 * from the accent-<hue> semantic tokens, so every theme keeps its own palette.
 */
export const categoryChipClass = (type: CategoryType): string => {
  if (type === "IN_PROGRESS") {
    return "bg-background-accent-blue-subtler text-font-accent-blue";
  }

  if (type === "DONE") {
    return "bg-background-accent-green-subtler text-font-accent-green";
  }

  return "bg-background-accent-grey-subtler text-font-accent-grey";
};
