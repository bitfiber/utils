import {getStyle} from '../';

/**
 * Sets a new value for a certain style for a given HTML element
 * @param element - any HTML element
 * @param styleName - any style name
 * @param value - new value for style
 * @returns previous value for style
 */
export function setStyle(element: HTMLElement, styleName: string, value: string): string {
  const originalStyle = getStyle(element, styleName);
  (<any>element.style)[styleName] = value;
  return originalStyle;
}
