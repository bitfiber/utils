import {stub, same, random} from '../';

const obj: any = {};
const arr: any[] = [];
const reg = /^reg$/;
const sym = Symbol('sym');
const date = new Date();

describe('@bitfiber/utils/same', () => {
  it('Test', () => {
    expect(same('', '')).toBeTruthy();
    expect(same(0, 0)).toBeTruthy();
    expect(same(-0, 0)).toBeTruthy();
    expect(same(0, '0')).toBeFalsy();
    expect(same(NaN, NaN)).toBeTruthy();
    expect(same(Infinity, Infinity)).toBeTruthy();
    expect(same(NaN, Infinity)).toBeFalsy();
    expect(same(null, null)).toBeTruthy();
    expect(same(undefined, undefined)).toBeTruthy();
    expect(same(null, undefined)).toBeFalsy();
    expect(same(false, false)).toBeTruthy();
    expect(same(true, true)).toBeTruthy();
    expect(same(false, true)).toBeFalsy();
    expect(same([], [])).toBeFalsy();
    expect(same(arr, arr)).toBeTruthy();
    expect(same({}, {})).toBeFalsy();
    expect(same(obj, obj)).toBeTruthy();
    expect(same(new Date(), new Date())).toBeFalsy();
    expect(same(date, date)).toBeTruthy();
    expect(same(/^reg$/, /^reg$/)).toBeFalsy();
    expect(same(reg, reg)).toBeTruthy();
    expect(same(stub, random)).toBeFalsy();
    expect(same(stub, stub)).toBeTruthy();
    expect(same(Symbol('sym'), Symbol('sym'))).toBeFalsy();
    expect(same(sym, sym)).toBeTruthy();
  });
});
