/**
 * @jest-environment jsdom
 */

import {copy, isArray, isTypedArray, isUsualObject, isDate, isRegExp, isSet, isMap} from '../';

function fn() {//
}

describe('@bitfiber/utils/copy', () => {
  it('Test', () => {
    const arr = [true, 1, {test: [[true]]}];
    const iArr = new Int32Array([1, 4]);
    const obj = {test: [[true]]};
    const date = new Date();
    const reg = /^reg$/;
    const set = new Set([true, [true, 1, {test: [[true]]}], 'str']);
    const map = new Map([[true, [true, 1, {test: [[true]]}]]]);
    const sym = Symbol('sym');
    expect(copy('')).toBe('');
    expect(copy(0)).toBe(0);
    expect(copy(-0)).toBe(-0);
    expect(copy(NaN)).toBeNaN();
    expect(copy(Infinity)).toBe(Infinity);
    expect(copy(null)).toBe(null);
    expect(copy(undefined)).toBe(undefined);
    expect(copy(false)).toBe(false);
    expect(copy(true)).toBe(true);
    expect(isArray(copy(arr))).toBeTruthy();
    expect(copy(arr) !== arr).toBeTruthy();
    expect(copy(arr)).toEqual(arr);
    expect(copy([{test: [[true]]}])).toEqual([{test: [[true]]}]);
    expect(isTypedArray(copy(iArr))).toBeTruthy();
    expect(copy(iArr) !== iArr).toBeTruthy();
    expect(copy(iArr)).toEqual(iArr);
    expect(isUsualObject(copy(obj))).toBeTruthy();
    expect(copy(obj) !== obj).toBeTruthy();
    expect(copy(obj)).toEqual(obj);
    expect(copy({test: ['test']})).toEqual({test: ['test']});
    expect(isDate(copy(date))).toBeTruthy();
    expect(copy(date) !== date).toBeTruthy();
    expect(copy(date)).toEqual(date);
    expect(copy(new Date(1607300542000))).toEqual(new Date(1607300542000));
    expect(isRegExp(copy(reg))).toBeTruthy();
    expect(copy(reg) !== reg).toBeTruthy();
    expect(copy(reg)).toEqual(reg);
    expect(isSet(copy(set))).toBeTruthy();
    expect(copy(set) !== set).toBeTruthy();
    expect(copy(set)).toEqual(set);
    expect(isMap(copy(map))).toBeTruthy();
    expect(copy(map) !== map).toBeTruthy();
    expect(copy(map)).toEqual(map);
    expect(copy(fn)).toBe(fn);
    expect(copy(sym)).toBe(sym);
  });
});
