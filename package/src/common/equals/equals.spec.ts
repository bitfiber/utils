import {equals} from '../';

describe('@bitfiber/utils/equals', () => {
  it('Test', () => {
    const arr = [true, 1, {test: [[true]]}];
    const iArr = new Int32Array([1, 4]);
    const obj = {test: [[true]]};
    const date = new Date();
    const reg = /^reg$/;
    const set = new Set([true, [true, 1, {test: [[true]]}], 'str']);
    const map = new Map([[true, [true, 1, {test: [[true]]}]]]);
    const sym = Symbol('sym');
    const fn = () => {//
    };
    expect(equals('', '')).toBeTruthy();
    expect(equals(0, 0)).toBeTruthy();
    expect(equals(-0, 0)).toBeTruthy();
    expect(equals(0, '0')).toBeFalsy();
    expect(equals(NaN, NaN)).toBeTruthy();
    expect(equals(Infinity, Infinity)).toBeTruthy();
    expect(equals(NaN, Infinity)).toBeFalsy();
    expect(equals(null, null)).toBeTruthy();
    expect(equals(undefined, undefined)).toBeTruthy();
    expect(equals(null, undefined)).toBeFalsy();
    expect(equals(false, false)).toBeTruthy();
    expect(equals(true, true)).toBeTruthy();
    expect(equals(false, true)).toBeFalsy();
    expect(equals([{test: [[true]]}], [{test: [[true]]}])).toBeTruthy();
    expect(equals([{test: [[true]]}], [
      {
        test: [[true]],
        test2: [true],
      },
    ])).toBeFalsy();
    expect(equals(arr, arr)).toBeTruthy();
    expect(equals(new Int32Array([4, 34, 200]), new Int32Array([4, 34, 200]))).toBeTruthy();
    expect(equals(new Int32Array([4, 200, 34]), new Int32Array([4, 34, 200]))).toBeFalsy();
    expect(equals(new Int32Array([4, 34, 250]), new Int32Array([4, 34, 200]))).toBeFalsy();
    expect(equals(iArr, iArr)).toBeTruthy();
    expect(equals({test: ['test']}, {test: ['test']})).toBeTruthy();
    expect(equals({test: ['test1', 'test2']}, {test: ['test1']})).toBeFalsy();
    expect(equals({test: ['test2', 'test1']}, {test: ['test1', 'test2']})).toBeFalsy();
    expect(equals(obj, obj)).toBeTruthy();
    expect(equals(new Date(1607300542000), new Date(1607300542000))).toBeTruthy();
    expect(equals(new Date(1607300542001), new Date(1607300542002))).toBeFalsy();
    expect(equals(date, date)).toBeTruthy();
    expect(equals(/^reg$/, /^reg$/)).toBeTruthy();
    expect(equals(/^reg$/, /^reg2$/)).toBeFalsy();
    expect(equals(reg, reg)).toBeTruthy();
    expect(
      equals(new Set([true, [true, 1, {test: [[true]]}], 'str']), new Set([true, [true, 1, {test: [[true]]}], 'str'])),
    )
      .toBeTruthy();
    expect(
      equals(new Set([true, [true, 1, 'str', {test: [[true]]}]]), new Set([true, [true, 1, {test: [[true]]}], 'str'])),
    )
      .toBeFalsy();
    expect(
      equals(new Set([true, [true, 1, {test: [[true]]}], 'str2']), new Set([true, [true, 1, {test: [[true]]}], 'str'])),
    )
      .toBeFalsy();
    expect(equals(set, set)).toBeTruthy();
    expect(equals(new Map([[true, [true, 1, {test: [[true]]}]]]), new Map([[true, [true, 1, {test: [[true]]}]]])))
      .toBeTruthy();
    expect(equals(new Map([[true, [true, 1, {test: [[true]]}]]]), new Map([[[true, 1, {test: [[true]]}], true]])))
      .toBeFalsy();
    expect(equals(new Map([[true, [true, 1, {test: [[true]]}]]]), new Map([[false, [true, 1, {test: [[true]]}]]])))
      .toBeFalsy();
    expect(equals(map, map)).toBeTruthy();
    expect(equals(fn, () => {//
    })).toBeFalsy();
    expect(equals(fn, fn)).toBeTruthy();
    expect(equals(Symbol('sym'), Symbol('sym'))).toBeFalsy();
    expect(equals(sym, sym)).toBeTruthy();
  });
});
