import {Index} from '../../';
import {forEachObj} from '../../obj';
import {setStyle} from '../';

/**
 * Sets new styles for a given HTML element
 * @param element - any HTML element
 * @param styles - object containing new styles
 * @returns object containing previous styles
 */
export function setStyles<T extends Index<string>>(element: HTMLElement, styles: T): T {
  const originalStyles = <T>{};
  forEachObj(styles, (value, key) => {
    (<any>originalStyles)[key] = setStyle(element, <string>key, value);
  });
  return originalStyles;
}
