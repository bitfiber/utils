import {getDocument} from '../';

/**
 *  Returns the <html> element that is the root element of the document
 */
export function getHtml(): HTMLElement {
  const doc = getDocument();
  return doc.documentElement;
}
