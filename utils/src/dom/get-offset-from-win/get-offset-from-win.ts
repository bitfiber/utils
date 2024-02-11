import {Offset} from '../types';

/**
 * Returns the offset relative to the global window
 * @param element - any element
 */
export function getOffsetFromWin(element: Element): Offset {
  return element.getBoundingClientRect();
}
