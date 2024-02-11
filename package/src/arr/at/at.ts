/**
 * Returns the array item at index, or undefined if there is no index.
 * For negative indexes, returns items from the end
 * @param arr - any array
 * @param index - item index
 */
export function at<T>(arr: T[], index: number): T | undefined {
  // todo: change on 'Array.at' with ES2022
  return index < 0 ? arr[arr.length + index] : arr[index];
}
