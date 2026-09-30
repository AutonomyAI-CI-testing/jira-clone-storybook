import { describe, it, expect } from "vitest";
import { DEFAULT_SORT, sorts, sortDict, sortList, isValidSort } from "./filter";

describe("filter", () => {
  describe("DEFAULT_SORT", () => {
    it("should be a valid sort value", () => {
      expect(sorts).toContain(DEFAULT_SORT);
    });

    it("should be 'date'", () => {
      expect(DEFAULT_SORT).toBe("date");
    });
  });

  describe("isValidSort", () => {
    it("should return true for valid sort values", () => {
      expect(isValidSort("date")).toBe(true);
      expect(isValidSort("title")).toBe(true);
    });

    it("should return false for invalid sort values", () => {
      expect(isValidSort("invalid")).toBe(false);
      expect(isValidSort("")).toBe(false);
    });
  });

  describe("sortDict", () => {
    it("should map all sort values to labels", () => {
      expect(sortDict.date).toBe("Date");
      expect(sortDict.title).toBe("Name");
    });
  });

  describe("sortList", () => {
    it("should contain all sort options with id and label", () => {
      expect(sortList).toHaveLength(2);
      expect(sortList).toEqual([
        { id: "date", label: "Date" },
        { id: "title", label: "Name" },
      ]);
    });
  });
});
