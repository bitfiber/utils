import {BfError} from '../../common';

let doc = typeof document === 'object' ? document : undefined;

/**
 * Returns the document object representing the HTML document in the current environment
 */
export function getDocument(): Document {
  if (doc) {
    return doc;
  } else {
    throw new BfError('Document is absent', {code: 'bf_utils_dom_getDocument_1'});
  }
}

/**
 * If the global object is not a window, you can use this function to set up a stub document implementation
 * @example
 * For Angular:
 * setDocument(inject(DOCUMENT));
 * @param document - The document object representing the HTML document in the current environment
 */
export function setDocument(document: Document): void {
  doc = document;
}
