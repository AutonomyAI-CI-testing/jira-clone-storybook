export const textAreOnlySpaces = (text: string): boolean => {
  return /^( |\n)*$/.test(text);
};
