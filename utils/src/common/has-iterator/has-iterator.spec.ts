import {hasIterator} from '../';

describe('@bitfiber/utils/hasIterator', () => {
  it('Test', () => {
    expect(hasIterator('0')).toBeTruthy();
    expect(hasIterator(0)).toBeFalsy();
    expect(hasIterator(NaN)).toBeFalsy();
    expect(hasIterator(Infinity)).toBeFalsy();
    expect(hasIterator(null)).toBeFalsy();
    expect(hasIterator(undefined)).toBeFalsy();
    expect(hasIterator(true)).toBeFalsy();
    expect(hasIterator([])).toBeTruthy();
    expect(hasIterator(new Set())).toBeTruthy();
    expect(hasIterator(new Map())).toBeTruthy();
    expect(hasIterator(new Int32Array())).toBeTruthy();
    expect(hasIterator({})).toBeFalsy();
    (function () {
      // eslint-disable-next-line prefer-rest-params
      expect(hasIterator(arguments)).toBeTruthy();
    }());
  });
});
