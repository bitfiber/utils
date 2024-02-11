import {getWindow} from '../';

/**
 * Returns all computed styles of a given HTML element
 * @param element - any HTML element
 */
export function getAllStyles(element: HTMLElement): CSSStyleDeclaration {
  const win = getWindow();
  return win.getComputedStyle(element);
}
