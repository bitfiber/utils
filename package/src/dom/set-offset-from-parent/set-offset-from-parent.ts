import {isNumber, toFloat} from '../../';
import {TopLeft, getOffsetFromParent, setStyle, getStyle, setStyles} from '../';

/**
 * Sets the offset relative to the closest non-static parent element
 * For fixed elements sets the offset relative to the global window
 * @param element - any HTML element
 * @param offset - top and left position relative to the parent HTML element
 */
export function setOffsetFromParent(element: HTMLElement, offset: Partial<TopLeft>): void {
  let top = 0;
  let left = 0;
  let styleTop = getStyle(element, 'top');
  let styleLeft = getStyle(element, 'left');
  const position = getStyle(element, 'position');
  const styles: {top?: string; left?: string} = {};

  // An element cannot be static for offset applying
  if (position === 'static') {
    styleTop = '0'; // because top was ignored for a static element
    styleLeft = '0'; // because left was ignored for a static element
    setStyle(element, 'position', 'relative');
  }

  // If top or left is auto, need calculate real top and left relative to a non-static parent
  if ((position === 'absolute' || position === 'fixed') && (styleTop === 'auto' || styleLeft === 'auto')) {
    const offsetFromParent = getOffsetFromParent(element);
    top = offsetFromParent.top;
    left = offsetFromParent.left;
  } else {
    top = toFloat(styleTop);
    left = toFloat(styleLeft);
  }

  if (isNumber(offset.top)) {
    const newTop = top + offset.top;
    styles.top = newTop !== 0 ? newTop + 'px' : '0';
  }

  if (isNumber(offset.left)) {
    const newLeft = left + offset.left;
    styles.left = newLeft !== 0 ? newLeft + 'px' : '0';
  }

  setStyles(element, styles);
}
