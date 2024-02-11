/**
 * @jest-environment jsdom
 */

import {getDocument, hasName} from '../';

describe('@bitfiber/utils/dom/isText', () => {
  test('Returns true for an element with the correct name', () => {
    const doc = getDocument();
    const element = doc.createElement('div');
    expect(hasName(element, 'div')).toBe(true);
  });

  test('Returns false for an element with a different name', () => {
    const doc = getDocument();
    const element = doc.createElement('div');
    expect(hasName(element, 'span')).toBe(false);
  });
});
