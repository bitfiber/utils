import {BfError, toFloat} from '../../common';
import {Offset, hasName, getNonStaticParent, getOffsetFromWin, getOffsetFromDoc, getStyle} from '../';

/**
 * Returns the offset relative to the closest non-static parent element.
 * For fixed elements returns the offset relative to the global window
 * @param element - any HTML element
 */
export function getOffsetFromParent(element: HTMLElement): Offset {
  let offset: Offset;
  let parentOffset: Offset;

  if (hasName(element, 'html') || hasName(element, 'body')) {
    throw new BfError('Element cannot be html or body', {code: 'bf_utils_dom_getOffsetFromParent_1'});
  }

  if (getStyle(element, 'position') === 'fixed') {
    offset = getOffsetFromWin(element);
    parentOffset = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
    };
  } else {
    const parent = getNonStaticParent(element);
    offset = getOffsetFromDoc(element);
    parentOffset = getOffsetFromDoc(parent);

    // The element cannot overlap its parent border, so the border width is added to the offset
    parentOffset.top += toFloat(getStyle(parent, 'borderTopWidth'));
    parentOffset.bottom -= toFloat(getStyle(parent, 'borderBottomWidth'));
    parentOffset.left += toFloat(getStyle(parent, 'borderLeftWidth'));
    parentOffset.right -= toFloat(getStyle(parent, 'borderRightWidth'));
  }

  // Subtract the element's margin so that the element is correctly placed relative to its parent
  return {
    top: offset.top - parentOffset.top - toFloat(getStyle(element, 'marginTop')),
    bottom: offset.bottom - parentOffset.bottom - toFloat(getStyle(element, 'marginTop')),
    left: offset.left - parentOffset.left - toFloat(getStyle(element, 'marginLeft')),
    right: offset.right - parentOffset.right - toFloat(getStyle(element, 'marginLeft')),
    width: offset.width,
    height: offset.height,
  };
}
