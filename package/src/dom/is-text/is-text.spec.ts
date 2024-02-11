/**
 * @jest-environment jsdom
 */

import {getDocument, isText} from '../';

describe('@bitfiber/utils/dom/isText', () => {
  it('Returns false for an HTML element', () => {
    const doc = getDocument();
    const element = doc.createElement('div');
    expect(isText(element)).toBe(false);
  });

  it('Returns false for a comment', () => {
    const doc = getDocument();
    const comment = doc.createComment('This is some comment');
    expect(isText(comment)).toBe(false);
  });

  it('Returns true for a text node', () => {
    const doc = getDocument();
    const textNode = doc.createTextNode('This is a text node');
    expect(isText(textNode)).toBe(true);
  });

  it('Returns false for a string', () => {
    const stringValue = 'This is a regular string';
    expect(isText(stringValue)).toBe(false);
  });

  it('Returns false for an object', () => {
    const objectValue = {key: 'value'};
    expect(isText(objectValue)).toBe(false);
  });

  it('Returns false for null', () => {
    const nullValue = null;
    expect(isText(nullValue)).toBe(false);
  });
});
