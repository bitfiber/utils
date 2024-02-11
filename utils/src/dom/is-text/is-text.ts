/**
 * Determines if the given node represents a text node
 * @param value - any value
 */
export function isText(value: any): value is Text {
  return value instanceof Text;
}
