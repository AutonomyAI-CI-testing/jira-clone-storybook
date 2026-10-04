import { describe, expect, it } from "vitest";
import { COMMENT_MAX_LENGTH, DESCRIPTION_MAX_LENGTH, remainingCharacters } from "./character-limit";

describe("COMMENT_MAX_LENGTH", () => {
  it("limits a comment to 1000 characters", () => {
    expect(COMMENT_MAX_LENGTH).toBe(1000);
  });
});

describe("DESCRIPTION_MAX_LENGTH", () => {
  it("limits a description to 5000 characters", () => {
    expect(DESCRIPTION_MAX_LENGTH).toBe(5000);
  });
});

describe("remainingCharacters", () => {
  it("returns the whole limit for an empty text", () => {
    expect(remainingCharacters("", COMMENT_MAX_LENGTH)).toBe(1000);
    expect(remainingCharacters("", DESCRIPTION_MAX_LENGTH)).toBe(5000);
  });

  it("subtracts the length of the text from the limit", () => {
    expect(remainingCharacters("hello", 10)).toBe(5);
  });

  it("counts every character, including spaces", () => {
    expect(remainingCharacters("a b", 5)).toBe(2);
  });

  it("returns 0 when the text is exactly at the limit", () => {
    expect(remainingCharacters("a".repeat(COMMENT_MAX_LENGTH), COMMENT_MAX_LENGTH)).toBe(0);
    expect(remainingCharacters("a".repeat(DESCRIPTION_MAX_LENGTH), DESCRIPTION_MAX_LENGTH)).toBe(0);
  });

  it("goes negative once the text is over the limit", () => {
    expect(remainingCharacters("a".repeat(COMMENT_MAX_LENGTH + 13), COMMENT_MAX_LENGTH)).toBe(-13);
    expect(
      remainingCharacters("a".repeat(DESCRIPTION_MAX_LENGTH + 1), DESCRIPTION_MAX_LENGTH)
    ).toBe(-1);
  });

  it("works for any limit, not just the ones above", () => {
    expect(remainingCharacters("abc", 3)).toBe(0);
    expect(remainingCharacters("abcd", 3)).toBe(-1);
  });
});
