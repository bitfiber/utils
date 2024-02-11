import {getDocument} from '../';

/**
 * Returns the <body> element of the current document
 */
export function getBody(): HTMLElement {
  const doc = getDocument();
  return doc.body;
}
