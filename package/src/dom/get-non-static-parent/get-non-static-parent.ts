import {getBody} from '../';

/**
 * Returns the closest non-static parent HTML element
 * @param element
 */
export function getNonStaticParent(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.offsetParent || getBody();
}
