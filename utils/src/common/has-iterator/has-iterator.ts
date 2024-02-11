/**
 * Returns true if the value has an iterator, otherwise false
 * @param value - anything
 */
export function hasIterator(value: any): boolean {
  return !!(value && value[Symbol.iterator]);
}
