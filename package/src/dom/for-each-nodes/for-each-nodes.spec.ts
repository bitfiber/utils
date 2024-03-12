import {INTERRUPT} from '../../common';
import {getDocument, forEachNodes, isElement, hasName, isText, isComment} from '../';

describe('@bitfiber/utils/dom/forEachNodes', () => {
  it('Iterates all children', () => {
    const result: string[] = [];
    const doc = getDocument();
    const parent = doc.createElement('div');
    const div = doc.createElement('div');
    const text = doc.createTextNode('text');
    const comment = doc.createComment('comment');
    parent.appendChild(div);
    div.appendChild(text);
    div.appendChild(comment);

    forEachNodes(parent, (child): any => {
      if (isElement(child) && hasName(child, 'div')) {
        result.push('div');
      } else if (isText(child)) {
        result.push('text');
      } else if (isComment(child)) {
        result.push('comment');
      }
    });

    expect(result).toEqual(['div', 'text', 'comment']);
  });

  it('Iterates until interrupted', () => {
    const result: string[] = [];
    const doc = getDocument();
    const parent = doc.createElement('div');
    const div = doc.createElement('div');
    const text = doc.createTextNode('text');
    const comment = doc.createComment('comment');
    parent.appendChild(div);
    div.appendChild(text);
    div.appendChild(comment);

    forEachNodes(parent, (child): any => {
      if (isElement(child) && hasName(child, 'div')) {
        result.push('div');
        return INTERRUPT;
      } else if (isText(child)) {
        result.push('text');
      } else if (isComment(child)) {
        result.push('comment');
      }
    });

    expect(result).toEqual(['div']);
  });
});
