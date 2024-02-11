/**
 * @jest-environment jsdom
 */

import {getDocument, closest} from '../';

describe('@bitfiber/utils/dom/closest', () => {
  it('Returns itself', () => {
    const doc = getDocument();
    const div = doc.createElement('div');
    div.classList.add('any-class');
    expect(closest(div, '.any-class')).toBe(div);
  });

  it('Returns a parent element', () => {
    const doc = getDocument();
    const parent = doc.createElement('div');
    const child = doc.createElement('div');
    parent.classList.add('any-class');
    parent.appendChild(child);
    expect(closest(child, '.any-class')).toBe(parent);
  });

  it('Returns null', () => {
    const doc = getDocument();
    const parent = doc.createElement('div');
    const child = doc.createElement('div');
    parent.appendChild(child);
    expect(closest(child, '.any-class')).toBe(null);
  });
});
