/**
 * @jest-environment jsdom
 */

import {getDocument, isElement} from '../';

describe('@bitfiber/utils/dom/isElement', () => {
  it('Returns true for an HTML element', () => {
    const doc = getDocument();
    const element = doc.createElement('div');
    expect(isElement(element)).toBe(true);
  });

  it('Returns false for a comment', () => {
    const doc = getDocument();
    const comment = doc.createComment('This is some comment');
    expect(isElement(comment)).toBe(false);
  });

  it('Returns false for a text node', () => {
    const doc = getDocument();
    const textNode = doc.createTextNode('This is a text node');
    expect(isElement(textNode)).toBe(false);
  });

  it('Returns false for a string', () => {
    const stringValue = 'This is a regular string';
    expect(isElement(stringValue)).toBe(false);
  });

  it('Returns false for an object', () => {
    const objectValue = {key: 'value'};
    expect(isElement(objectValue)).toBe(false);
  });

  it('Returns false for null', () => {
    const nullValue = null;
    expect(isElement(nullValue)).toBe(false);
  });
});
