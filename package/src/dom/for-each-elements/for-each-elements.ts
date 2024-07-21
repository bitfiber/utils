import {forEach, INTERRUPT} from '../../common';

/**
 * Iterates through all child elements of the parent element to the full depth of the tree
 * and calls a handler for each element.
 * If the handler returns INTERRUPT, the loop will be interrupted
 * @param parent - a parent element
 * @param handler - function called for each element
 */
export function forEachElements(
  parent: Element,
  handler: (child: Element, index: number, parent: Element) => any,
): void {
  forEach(parent.children, (child, i) => {
    if (handler(child, <number>i, parent) !== INTERRUPT) {
      forEachElements(child, handler);
    }
  });
}
