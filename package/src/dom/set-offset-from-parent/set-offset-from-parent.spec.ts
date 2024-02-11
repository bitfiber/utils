/**
 * @jest-environment jsdom
 */

import {getDocument, getStyle, setOffsetFromParent} from '../';

describe('@bitfiber/utils/dom/setOffsetFromParent', () => {
  it('Test', () => {
    const doc = getDocument();
    const div = doc.createElement('div');
    setOffsetFromParent(div, {
      top: 30,
      left: 40,
    });
    expect(getStyle(div, 'top')).toBe('30px');
    expect(getStyle(div, 'left')).toBe('40px');
  });
});
