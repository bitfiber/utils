/**
 * Converts a given string into camelCase format.
 * CamelCase is a convention where a multi-word identifier is formed by joining words together,
 * each starting with a capital letter except for the initial word.
 * This function takes a string as input, which may be in various formats such as snake_case,
 * kebab-case, or space-separated words, and transforms it into camelCase.
 * @param str - the input string that needs to be converted to camelCase
 * @param separators - an array of any separators, default '-', '_', ' '
 */
export function toCamelCase(str: string, separators: string[] = ['-', '_', ' ']): string {
  return separators.reduce((acc: string, separator: string) => {
    const reg: RegExp = new RegExp(separator + '([\\da-z])', 'gi');
    return acc.replace(reg, (all: string, letter: string) => {
      return letter.toUpperCase();
    });
  }, str);
}
