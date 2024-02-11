/**
 * @jest-environment jsdom
 */

import {INTERRUPT} from '../../';
import {getDocument, forEachElements, isElement, hasName, isText, isComment} from '../';

describe('@bitfiber/utils/dom/forEachNodes', () => {
  it('Iterates only child elements', () => {
    const result: string[] = [];
    const doc = getDocument();
    const parent = doc.createElement('div');
    const div = doc.createElement('div');
    const span = doc.createElement('span');
    const text = doc.createTextNode('text');
    const comment = doc.createComment('comment');
    parent.appendChild(div);
    div.appendChild(comment);
    div.appendChild(span);
    span.appendChild(text);

    forEachElements(parent, (child): any => {
      if (isElement(child) && hasName(child, 'div')) {
        result.push('div');
      } else if (isElement(child) && hasName(child, 'span')) {
        result.push('span');
      } else if (isText(child)) {
        result.push('text');
      } else if (isComment(child)) {
        result.push('comment');
      }
    });

    expect(result).toEqual(['div', 'span']);
  });

  it('Iterates child elements until interrupted', () => {
    const result: string[] = [];
    const doc = getDocument();
    const parent = doc.createElement('div');
    const div = doc.createElement('div');
    const span = doc.createElement('span');
    const text = doc.createTextNode('text');
    const comment = doc.createComment('comment');
    parent.appendChild(div);
    div.appendChild(comment);
    div.appendChild(span);
    span.appendChild(text);

    forEachElements(parent, (child): any => {
      if (isElement(child) && hasName(child, 'div')) {
        result.push('div');
        return INTERRUPT;
      } else if (isElement(child) && hasName(child, 'span')) {
        result.push('span');
      } else if (isText(child)) {
        result.push('text');
      } else if (isComment(child)) {
        result.push('comment');
      }
    });

    expect(result).toEqual(['div']);
  });
});
