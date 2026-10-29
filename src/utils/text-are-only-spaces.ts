// Every field this guards is a <textarea>, so a stray Enter must count as empty
// just like a stray space: `\s` covers line breaks and tabs, not only " ".
export const textAreOnlySpaces = (text: string): boolean => {
  return /^\s*$/.test(text);
};
