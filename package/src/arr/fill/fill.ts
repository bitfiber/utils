/**
 * Fills a new array with items that will be returned by the handler,
 * which will be called a certain number of times
 * @param quantity - number of array items
 * @param handler - a function that should return a new array item
 * @param offset - offset for the index, which is passed to the handler
 */
export function fill<T>(
  quantity: number,
  handler: (offsetIndex: number, index: number) => T,
  offset = 1,
): T[] {
  return Array(quantity).fill(null).map((item, index) => handler(index + offset, index));
}
