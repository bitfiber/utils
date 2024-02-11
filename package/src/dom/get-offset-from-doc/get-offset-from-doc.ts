import {getWindow, Offset} from '../';

/**
 * Returns the offset relative to the document
 * @param element - any element
 */
export function getOffsetFromDoc(element: Element): Offset {
  const win = getWindow();
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + win.scrollY,
    bottom: rect.bottom + win.scrollY,
    left: rect.left + win.scrollX,
    right: rect.right + win.scrollX,
    width: rect.width,
    height: rect.height,
  };
}
