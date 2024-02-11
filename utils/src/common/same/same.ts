/**
 * Determines whether two values are the same value
 * @param value1 - anything
 * @param value2 - anything
 */
export function same(value1: any, value2: any): boolean {
  return (value1 === 0 && value2 === 0) || Object.is(value1, value2);
}
