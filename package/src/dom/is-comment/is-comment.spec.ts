import {getDocument, isComment} from '../';

describe('@bitfiber/utils/dom/isComment', () => {
  it('Returns false for an HTML element', () => {
    const doc = getDocument();
    const element = doc.createElement('div');
    expect(isComment(element)).toBe(false);
  });

  it('Returns true for a comment', () => {
    const doc = getDocument();
    const comment = doc.createComment('This is some comment');
    expect(isComment(comment)).toBe(true);
  });

  it('Returns false for a text node', () => {
    const doc = getDocument();
    const textNode = doc.createTextNode('This is a text node');
    expect(isComment(textNode)).toBe(false);
  });

  it('Returns false for a string', () => {
    const stringValue = 'This is a regular string';
    expect(isComment(stringValue)).toBe(false);
  });

  it('Returns false for an object', () => {
    const objectValue = {key: 'value'};
    expect(isComment(objectValue)).toBe(false);
  });

  it('Returns false for null', () => {
    const nullValue = null;
    expect(isComment(nullValue)).toBe(false);
  });
});
