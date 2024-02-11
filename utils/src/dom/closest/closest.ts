/**
 * Returns the same element or the closest parent element matching the selectors, otherwise null
 * @param element - any HTML element
 * @param selectors - target HTML element or string of valid CSS selectors
 */
export function closest(element: HTMLElement, selectors: string | HTMLElement): HTMLElement | null {
  let currentElem: HTMLElement | null = element;

  while (currentElem) {
    if (selectors instanceof Element) {
      if (currentElem === selectors) {
        return currentElem;
      } else {
        currentElem = currentElem.parentElement;
      }
    } else if (currentElem.matches(selectors)) {
      return currentElem;
    } else {
      currentElem = currentElem.parentElement;
    }
  }

  return null;
}
