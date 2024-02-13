import {Index} from '../../common';
import {getValidStyleName, getAllStyles} from '../';

const validStyleValues: Index<[string, string]> = {
  opacity: ['', '1'],
  fontWeight: ['normal', '400'],
  letterSpacing: ['normal', '0'],
};

/**
 * Returns certain computed style value of a given HTML element
 * @param element - any HTML element
 * @param styleName - any style name
 */
export function getStyle(element: HTMLElement, styleName: string): string {
  const styles = getAllStyles(element);
  const validName = getValidStyleName(styleName);
  const value = styles.getPropertyValue(validName);

  if (validStyleValues[validName] && value === validStyleValues[validName][0]) {
    return validStyleValues[validName][1];
  } else {
    return value;
  }
}
