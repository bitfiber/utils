/**
 * @jest-environment jsdom
 */

import {getDocument, getOffsetFromDoc} from '../';

describe('@bitfiber/utils/dom/getOffsetFromDoc', () => {
  it('Test', () => {
    const doc = getDocument();
    const div = doc.createElement('div');
    expect(getOffsetFromDoc(div)).toEqual({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
    });
  });
});
