/**
 * Determines if the given node represents an element
 * @param value - any value
 */
export function isElement(value: any): value is Element {
  return value instanceof Element;
}
