/**
 * @jest-environment jsdom
 */

import {getDocument, getOffsetFromParent} from '../';

describe('@bitfiber/utils/dom/getOffsetFromParent', () => {
  it('Test', () => {
    const doc = getDocument();
    const div = doc.createElement('div');
    expect(getOffsetFromParent(div)).toEqual({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
    });
  });
});
