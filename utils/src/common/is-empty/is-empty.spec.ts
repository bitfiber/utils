import {stub, isEmpty} from '../';

describe('@bitfiber/utils/isEmpty', () => {
  it('Test', () => {
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty('0')).toBeFalsy();
    expect(isEmpty(0)).toBeFalsy();
    expect(isEmpty(-0)).toBeFalsy();
    expect(isEmpty(NaN)).toBeFalsy();
    expect(isEmpty(Infinity)).toBeFalsy();

    // expect(isEmpty(1n)).toBeFalsy();  // BigInt literals are not available when targeting lower than ES2020
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(false)).toBeFalsy();
    expect(isEmpty(true)).toBeFalsy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty([undefined])).toBeFalsy();
    expect(isEmpty(['test'])).toBeFalsy();
    expect(isEmpty(new Int32Array())).toBeTruthy();
    expect(isEmpty(new Int32Array([]))).toBeTruthy();
    expect(isEmpty(new Int32Array([0]))).toBeFalsy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty({test: undefined})).toBeTruthy();
    expect(isEmpty({test: null})).toBeFalsy();
    expect(isEmpty(new Date())).toBeFalsy();
    expect(isEmpty(new Set())).toBeTruthy();
    expect(isEmpty(new Set([undefined]))).toBeFalsy();
    expect(isEmpty(new Set([0]))).toBeFalsy();
    expect(isEmpty(new Map())).toBeTruthy();
    expect(isEmpty(new Map([[undefined, undefined]]))).toBeFalsy();
    expect(isEmpty(new Map([[0, 0]]))).toBeFalsy();
    expect(isEmpty(/^reg$/)).toBeFalsy();
    expect(isEmpty(stub)).toBeFalsy();
    expect(isEmpty(Symbol('sym'))).toBeFalsy();
  });
});
