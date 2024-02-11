/**
 * @jest-environment jsdom
 */

import {getScrollWidth} from '../';

describe('@bitfiber/utils/dom/getScrollWidth', () => {
  it('Test', () => {
    expect(getScrollWidth())
      .toEqual({
        y: 0,
        x: 0,
      });
  });
});
