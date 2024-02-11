import {getHtml, setStyle} from '../';

/**
 * Returns width of vertical and horizontal scrollbars
 * @param element - any HTML element, default the document's root element <html>
 */
export function getScrollWidth(element?: HTMLElement): {y: number; x: number} {
  element = element || getHtml();
  const originalValue = setStyle(element, 'overflow', 'hidden');
  const clientWidth1 = element.clientWidth;
  const clientHeight1 = element.clientHeight;

  setStyle(element, 'overflow', 'scroll');
  const clientWidth2 = element.clientWidth;
  const clientHeight2 = element.clientHeight;

  setStyle(element, 'overflow', originalValue);
  let y = clientWidth1 - clientWidth2;
  let x = clientHeight1 - clientHeight2;

  if (y > 0) {
    y += 1;
  }

  if (x > 0) {
    x += 1;
  }

  return {
    y,
    x,
  };
}
