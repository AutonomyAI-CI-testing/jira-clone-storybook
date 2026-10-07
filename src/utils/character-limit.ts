export const COMMENT_MAX_LENGTH = 2000;
export const DESCRIPTION_MAX_LENGTH = 5000;

// How many characters are still available in a text field. Goes negative once
// the text is over the limit, so callers can tell "exactly full" from "over".
export const remainingCharacters = (text: string, max: number): number => {
  return max - text.length;
};
