import {ValueUnion} from '../../';
import {getStyle} from '../';

/**
 * Returns an object with the specified computed styles for a given HTML element
 * @param element - any HTML element
 * @param styleNames - list of certain style names
 */
export function getStyles<A extends string[]>(element: HTMLElement,
  ...styleNames: A): {[K in ValueUnion<A>]: string} {
  const styles: {[K in ValueUnion<A>]: string} = <any>{};
  styleNames.forEach(name => (<any>styles)[name] = getStyle(element, name));
  return styles;
}
