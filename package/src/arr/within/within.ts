import {at} from '../';

/**
 * Returns an array item by index.
 * If the index is greater than the array length,
 * then the array item will be obtained like remainder of division the index by the array length.
 * For negative indexes, returns items from the end
 * @param arr - any array
 * @param index - an array item index
 */
export function within<T>(arr: T[], index: number): T | undefined {
  const max = arr.length;
  return at(arr, ((index + 1) % max || max) - 1);
}
