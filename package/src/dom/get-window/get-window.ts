import {BfError} from '../../';
import {getDocument} from '../';

let win = typeof window === 'object' ? window : undefined;

/**
 * Returns the global window object in the current environment
 */
export function getWindow(): Window & typeof globalThis {
  const doc = getDocument();
  win = doc.defaultView || win;
  if (win) {
    return win;
  } else {
    throw new BfError('Window is absent', {code: 'bf_utils_dom_getWindow_1'});
  }
}
