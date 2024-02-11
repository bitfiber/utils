/**
 * @jest-environment jsdom
 */

import {getBody, hasName} from '../';

describe('@bitfiber/utils/dom/getBody', () => {
  it('Has a tag name body', () => {
    const body = getBody();
    expect(hasName(body, 'body')).toBeTruthy();
  });
});
