/**
 * Determines if the name of the passed element matches a specific name
 * @param element - any HTML element
 * @param name - any node name
 */
export function hasName(element: Element, name: string): boolean {
  return element.nodeName.toLowerCase() === name.toLowerCase();
}
