/**
 * Takes a string as input and returns a new string with the initial letter in uppercase,
 * while preserving the rest of the string
 * @param str - The input string whose first letter needs to be capitalized
 */
export function withCapital(str: string): string {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
