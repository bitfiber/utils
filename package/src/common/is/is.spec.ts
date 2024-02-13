/**
 * @jest-environment jsdom
 */

import {
  isNaN, isArray, isArrayBuffer, isBigInt, isBlob, isBoolean, isDate, isDefined, isDocument, isFile, isFormData,
  isFunction, isMap, isNull, isNumber, isObject, isObservable, isPromise, isRegExp, isSet, isString, isSymbol,
  isTypedArray, isUndefined, isUsualObject, isWindow,
} from '../';

function fn() {//
}

describe('@bitfiber/utils/common/is', () => {
  it('isNull', () => {
    expect(isNull('0')).toBeFalsy();
    expect(isNull(0)).toBeFalsy();
    expect(isNull(-0)).toBeFalsy();
    expect(isNull(NaN)).toBeFalsy();
    expect(isNull(Infinity)).toBeFalsy();
    expect(isNull(null)).toBeTruthy();
    expect(isNull(undefined)).toBeFalsy();
    expect(isNull(false)).toBeFalsy();
    expect(isNull([])).toBeFalsy();
    expect(isNull({})).toBeFalsy();
    expect(isNull(fn)).toBeFalsy();
    expect(isNull(Symbol('sym'))).toBeFalsy();
  });

  it('isNaN', () => {
    expect(isNaN('0')).toBeFalsy();
    expect(isNaN(0)).toBeFalsy();
    expect(isNaN(-0)).toBeFalsy();
    expect(isNaN(NaN)).toBeTruthy();
    expect(isNaN(Infinity)).toBeFalsy();
    expect(isNaN(null)).toBeFalsy();
    expect(isNaN(undefined)).toBeFalsy();
    expect(isNaN(false)).toBeFalsy();
    expect(isNaN([])).toBeFalsy();
    expect(isNaN({})).toBeFalsy();
    expect(isNaN(fn)).toBeFalsy();
    expect(isNaN(Symbol('sym'))).toBeFalsy();
  });

  it('isUndefined', () => {
    expect(isUndefined('0')).toBeFalsy();
    expect(isUndefined(0)).toBeFalsy();
    expect(isUndefined(-0)).toBeFalsy();
    expect(isUndefined(NaN)).toBeFalsy();
    expect(isUndefined(Infinity)).toBeFalsy();
    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined(undefined)).toBeTruthy();
    expect(isUndefined(false)).toBeFalsy();
    expect(isUndefined([])).toBeFalsy();
    expect(isUndefined({})).toBeFalsy();
    expect(isUndefined(fn)).toBeFalsy();
    expect(isUndefined(Symbol('sym'))).toBeFalsy();
  });

  it('isDefined', () => {
    expect(isDefined('0')).toBeTruthy();
    expect(isDefined(0)).toBeTruthy();
    expect(isDefined(-0)).toBeTruthy();
    expect(isDefined(NaN)).toBeTruthy();
    expect(isDefined(Infinity)).toBeTruthy();
    expect(isDefined(null)).toBeTruthy();
    expect(isDefined(undefined)).toBeFalsy();
    expect(isDefined(false)).toBeTruthy();
    expect(isDefined([])).toBeTruthy();
    expect(isDefined({})).toBeTruthy();
    expect(isDefined(fn)).toBeTruthy();
    expect(isDefined(Symbol('sym'))).toBeTruthy();
  });

  it('isString', () => {
    expect(isString('0')).toBeTruthy();
    expect(isString(0)).toBeFalsy();
    expect(isString(-0)).toBeFalsy();
    expect(isString(NaN)).toBeFalsy();
    expect(isString(Infinity)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString(false)).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString({})).toBeFalsy();
    expect(isString(fn)).toBeFalsy();
    expect(isString(Symbol('sym'))).toBeFalsy();
  });

  it('isNumber', () => {
    expect(isNumber('0')).toBeFalsy();
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(-0)).toBeTruthy();
    expect(isNumber(NaN)).toBeTruthy();
    expect(isNumber(Infinity)).toBeTruthy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber(false)).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
    expect(isNumber(fn)).toBeFalsy();
    expect(isNumber(Symbol('sym'))).toBeFalsy();
  });

  it('isBigInt', () => {
    expect(isBigInt('0')).toBeFalsy();
    expect(isBigInt(0)).toBeFalsy();
    expect(isBigInt(-0)).toBeFalsy();
    expect(isBigInt(NaN)).toBeFalsy();
    expect(isBigInt(Infinity)).toBeFalsy();
    expect(isBigInt(null)).toBeFalsy();
    expect(isBigInt(undefined)).toBeFalsy();
    expect(isBigInt(false)).toBeFalsy();
    expect(isBigInt([])).toBeFalsy();
    expect(isBigInt({})).toBeFalsy();
    expect(isBigInt(fn)).toBeFalsy();
    expect(isBigInt(Symbol('sym'))).toBeFalsy();

    // expect(isBigInt(1n)).toBeTruthy(); // BigInt literals are not available when targeting lower than ES2020
  });

  it('isBoolean', () => {
    expect(isBoolean('0')).toBeFalsy();
    expect(isBoolean(0)).toBeFalsy();
    expect(isBoolean(-0)).toBeFalsy();
    expect(isBoolean(NaN)).toBeFalsy();
    expect(isBoolean(Infinity)).toBeFalsy();
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean(undefined)).toBeFalsy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean([])).toBeFalsy();
    expect(isBoolean({})).toBeFalsy();
    expect(isBoolean(fn)).toBeFalsy();
    expect(isBoolean(Symbol('sym'))).toBeFalsy();
  });

  it('isSymbol', () => {
    expect(isSymbol('0')).toBeFalsy();
    expect(isSymbol(0)).toBeFalsy();
    expect(isSymbol(-0)).toBeFalsy();
    expect(isSymbol(NaN)).toBeFalsy();
    expect(isSymbol(Infinity)).toBeFalsy();
    expect(isSymbol(null)).toBeFalsy();
    expect(isSymbol(undefined)).toBeFalsy();
    expect(isSymbol(false)).toBeFalsy();
    expect(isSymbol([])).toBeFalsy();
    expect(isSymbol({})).toBeFalsy();
    expect(isSymbol(fn)).toBeFalsy();
    expect(isSymbol(Symbol('sym'))).toBeTruthy();
  });

  it('isFunction', () => {
    expect(isFunction('0')).toBeFalsy();
    expect(isFunction(0)).toBeFalsy();
    expect(isFunction(-0)).toBeFalsy();
    expect(isFunction(NaN)).toBeFalsy();
    expect(isFunction(Infinity)).toBeFalsy();
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(undefined)).toBeFalsy();
    expect(isFunction(false)).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
    expect(isFunction({})).toBeFalsy();
    expect(isFunction(fn)).toBeTruthy();
    expect(isFunction(Symbol('sym'))).toBeFalsy();
  });

  it('isObject', () => {
    expect(isObject('0')).toBeFalsy();
    expect(isObject(0)).toBeFalsy();
    expect(isObject(-0)).toBeFalsy();
    expect(isObject(NaN)).toBeFalsy();
    expect(isObject(Infinity)).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(false)).toBeFalsy();
    expect(isObject([])).toBeTruthy();
    expect(isObject({})).toBeTruthy();
    expect(isObject(new Date())).toBeTruthy();
    expect(isObject(/^reg$/)).toBeTruthy();
    expect(isObject(fn)).toBeFalsy();
    expect(isObject(Symbol('sym'))).toBeFalsy();
  });

  it('isArray', () => {
    expect(isArray('0')).toBeFalsy();
    expect(isArray(0)).toBeFalsy();
    expect(isArray(-0)).toBeFalsy();
    expect(isArray(NaN)).toBeFalsy();
    expect(isArray(Infinity)).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(false)).toBeFalsy();
    expect(isArray([])).toBeTruthy();
    expect(isArray({})).toBeFalsy();
    expect(isArray(fn)).toBeFalsy();
    expect(isArray(Symbol('sym'))).toBeFalsy();
  });

  it('isSet', () => {
    expect(isSet('0')).toBeFalsy();
    expect(isSet(0)).toBeFalsy();
    expect(isSet(-0)).toBeFalsy();
    expect(isSet(NaN)).toBeFalsy();
    expect(isSet(Infinity)).toBeFalsy();
    expect(isSet(null)).toBeFalsy();
    expect(isSet(undefined)).toBeFalsy();
    expect(isSet(false)).toBeFalsy();
    expect(isSet([])).toBeFalsy();
    expect(isSet({})).toBeFalsy();
    expect(isSet(fn)).toBeFalsy();
    expect(isSet(Symbol('sym'))).toBeFalsy();
    expect(isSet(new Set())).toBeTruthy();
  });

  it('isMap', () => {
    expect(isMap('0')).toBeFalsy();
    expect(isMap(0)).toBeFalsy();
    expect(isMap(-0)).toBeFalsy();
    expect(isMap(NaN)).toBeFalsy();
    expect(isMap(Infinity)).toBeFalsy();
    expect(isMap(null)).toBeFalsy();
    expect(isMap(undefined)).toBeFalsy();
    expect(isMap(false)).toBeFalsy();
    expect(isMap([])).toBeFalsy();
    expect(isMap({})).toBeFalsy();
    expect(isMap(fn)).toBeFalsy();
    expect(isMap(Symbol('sym'))).toBeFalsy();
    expect(isMap(new Map())).toBeTruthy();
  });

  it('isDate', () => {
    expect(isDate('0')).toBeFalsy();
    expect(isDate(0)).toBeFalsy();
    expect(isDate(-0)).toBeFalsy();
    expect(isDate(NaN)).toBeFalsy();
    expect(isDate(Infinity)).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate(false)).toBeFalsy();
    expect(isDate([])).toBeFalsy();
    expect(isDate({})).toBeFalsy();
    expect(isDate(fn)).toBeFalsy();
    expect(isDate(Symbol('sym'))).toBeFalsy();
    expect(isDate(new Date())).toBeTruthy();
  });

  it('isRegExp', () => {
    expect(isRegExp('0')).toBeFalsy();
    expect(isRegExp(0)).toBeFalsy();
    expect(isRegExp(-0)).toBeFalsy();
    expect(isRegExp(NaN)).toBeFalsy();
    expect(isRegExp(Infinity)).toBeFalsy();
    expect(isRegExp(null)).toBeFalsy();
    expect(isRegExp(undefined)).toBeFalsy();
    expect(isRegExp(false)).toBeFalsy();
    expect(isRegExp([])).toBeFalsy();
    expect(isRegExp({})).toBeFalsy();
    expect(isRegExp(fn)).toBeFalsy();
    expect(isRegExp(Symbol('sym'))).toBeFalsy();
    expect(isRegExp(/^reg$/)).toBeTruthy();
  });

  it('isFile', () => {
    expect(isFile('0')).toBeFalsy();
    expect(isFile(0)).toBeFalsy();
    expect(isFile(-0)).toBeFalsy();
    expect(isFile(NaN)).toBeFalsy();
    expect(isFile(Infinity)).toBeFalsy();
    expect(isFile(null)).toBeFalsy();
    expect(isFile(undefined)).toBeFalsy();
    expect(isFile(false)).toBeFalsy();
    expect(isFile([])).toBeFalsy();
    expect(isFile({})).toBeFalsy();
    expect(isFile(fn)).toBeFalsy();
    expect(isFile(Symbol('sym'))).toBeFalsy();
    expect(isFile(new File([new Blob()], 'name'))).toBeTruthy();
  });

  it('isBlob', () => {
    expect(isBlob('0')).toBeFalsy();
    expect(isBlob(0)).toBeFalsy();
    expect(isBlob(-0)).toBeFalsy();
    expect(isBlob(NaN)).toBeFalsy();
    expect(isBlob(Infinity)).toBeFalsy();
    expect(isBlob(null)).toBeFalsy();
    expect(isBlob(undefined)).toBeFalsy();
    expect(isBlob(false)).toBeFalsy();
    expect(isBlob([])).toBeFalsy();
    expect(isBlob({})).toBeFalsy();
    expect(isBlob(fn)).toBeFalsy();
    expect(isBlob(Symbol('sym'))).toBeFalsy();
    expect(isBlob(new Blob())).toBeTruthy();
  });

  it('isFormData', () => {
    expect(isFormData('0')).toBeFalsy();
    expect(isFormData(0)).toBeFalsy();
    expect(isFormData(-0)).toBeFalsy();
    expect(isFormData(NaN)).toBeFalsy();
    expect(isFormData(Infinity)).toBeFalsy();
    expect(isFormData(null)).toBeFalsy();
    expect(isFormData(undefined)).toBeFalsy();
    expect(isFormData(false)).toBeFalsy();
    expect(isFormData([])).toBeFalsy();
    expect(isFormData({})).toBeFalsy();
    expect(isFormData(fn)).toBeFalsy();
    expect(isFormData(Symbol('sym'))).toBeFalsy();
    expect(isFormData(new FormData())).toBeTruthy();
  });

  it('isArrayBuffer', () => {
    expect(isArrayBuffer('0')).toBeFalsy();
    expect(isArrayBuffer(0)).toBeFalsy();
    expect(isArrayBuffer(-0)).toBeFalsy();
    expect(isArrayBuffer(NaN)).toBeFalsy();
    expect(isArrayBuffer(Infinity)).toBeFalsy();
    expect(isArrayBuffer(null)).toBeFalsy();
    expect(isArrayBuffer(undefined)).toBeFalsy();
    expect(isArrayBuffer(false)).toBeFalsy();
    expect(isArrayBuffer([])).toBeFalsy();
    expect(isArrayBuffer({})).toBeFalsy();
    expect(isArrayBuffer(fn)).toBeFalsy();
    expect(isArrayBuffer(Symbol('sym'))).toBeFalsy();
    expect(isArrayBuffer(new ArrayBuffer(8))).toBeTruthy();
  });

  it('isDocument', () => {
    expect(isDocument('0')).toBeFalsy();
    expect(isDocument(0)).toBeFalsy();
    expect(isDocument(-0)).toBeFalsy();
    expect(isDocument(NaN)).toBeFalsy();
    expect(isDocument(Infinity)).toBeFalsy();
    expect(isDocument(null)).toBeFalsy();
    expect(isDocument(undefined)).toBeFalsy();
    expect(isDocument(false)).toBeFalsy();
    expect(isDocument([])).toBeFalsy();
    expect(isDocument({})).toBeFalsy();
    expect(isDocument(fn)).toBeFalsy();
    expect(isDocument(Symbol('sym'))).toBeFalsy();
    expect(isDocument(document)).toBeTruthy();
  });

  it('isWindow', () => {
    expect(isWindow('0')).toBeFalsy();
    expect(isWindow(0)).toBeFalsy();
    expect(isWindow(-0)).toBeFalsy();
    expect(isWindow(NaN)).toBeFalsy();
    expect(isWindow(Infinity)).toBeFalsy();
    expect(isWindow(null)).toBeFalsy();
    expect(isWindow(undefined)).toBeFalsy();
    expect(isWindow(false)).toBeFalsy();
    expect(isWindow([])).toBeFalsy();
    expect(isWindow({})).toBeFalsy();
    expect(isWindow(fn)).toBeFalsy();
    expect(isWindow(Symbol('sym'))).toBeFalsy();
    expect(isWindow(window)).toBeTruthy();
  });

  it('isPromise', () => {
    expect(isPromise('0')).toBeFalsy();
    expect(isPromise(0)).toBeFalsy();
    expect(isPromise(-0)).toBeFalsy();
    expect(isPromise(NaN)).toBeFalsy();
    expect(isPromise(Infinity)).toBeFalsy();
    expect(isPromise(null)).toBeFalsy();
    expect(isPromise(undefined)).toBeFalsy();
    expect(isPromise(false)).toBeFalsy();
    expect(isPromise([])).toBeFalsy();
    expect(isPromise({})).toBeFalsy();
    expect(isPromise(fn)).toBeFalsy();
    expect(isPromise(Symbol('sym'))).toBeFalsy();
    expect(isPromise(new Promise(fn))).toBeTruthy();
  });

  it('isObservable', () => {
    expect(isObservable('0')).toBeFalsy();
    expect(isObservable(0)).toBeFalsy();
    expect(isObservable(-0)).toBeFalsy();
    expect(isObservable(NaN)).toBeFalsy();
    expect(isObservable(Infinity)).toBeFalsy();
    expect(isObservable(null)).toBeFalsy();
    expect(isObservable(undefined)).toBeFalsy();
    expect(isObservable(false)).toBeFalsy();
    expect(isObservable([])).toBeFalsy();
    expect(isObservable({})).toBeFalsy();
    expect(isObservable(fn)).toBeFalsy();
    expect(isObservable(Symbol('sym'))).toBeFalsy();
    expect(isObservable({
      pipe: () => true,
      subscribe: () => true,
    })).toBeTruthy();
  });

  it('isTypedArray', () => {
    expect(isTypedArray('0')).toBeFalsy();
    expect(isTypedArray(0)).toBeFalsy();
    expect(isTypedArray(-0)).toBeFalsy();
    expect(isTypedArray(NaN)).toBeFalsy();
    expect(isTypedArray(Infinity)).toBeFalsy();
    expect(isTypedArray(null)).toBeFalsy();
    expect(isTypedArray(undefined)).toBeFalsy();
    expect(isTypedArray(false)).toBeFalsy();
    expect(isTypedArray([])).toBeFalsy();
    expect(isTypedArray({})).toBeFalsy();
    expect(isTypedArray(fn)).toBeFalsy();
    expect(isTypedArray(Symbol('sym'))).toBeFalsy();
    expect(isTypedArray(new Int8Array())).toBeTruthy();
    expect(isTypedArray(new Int16Array())).toBeTruthy();
    expect(isTypedArray(new Int32Array())).toBeTruthy();
    expect(isTypedArray(new Float32Array())).toBeTruthy();
    expect(isTypedArray(new Float64Array())).toBeTruthy();
    expect(isTypedArray(new Uint8Array())).toBeTruthy();
    expect(isTypedArray(new Uint8ClampedArray())).toBeTruthy();
    expect(isTypedArray(new Uint16Array())).toBeTruthy();
    expect(isTypedArray(new Uint32Array())).toBeTruthy();

    // expect(isTypedArray(new BigInt64Array())).toBeTruthy();
    // expect(isTypedArray(new BigUint64Array())).toBeTruthy();
  });

  it('isUsualObject', () => {
    expect(isUsualObject('0')).toBeFalsy();
    expect(isUsualObject(0)).toBeFalsy();
    expect(isUsualObject(-0)).toBeFalsy();
    expect(isUsualObject(NaN)).toBeFalsy();
    expect(isUsualObject(Infinity)).toBeFalsy();
    expect(isUsualObject(null)).toBeFalsy();
    expect(isUsualObject(undefined)).toBeFalsy();
    expect(isUsualObject(false)).toBeFalsy();
    expect(isUsualObject([])).toBeFalsy();
    expect(isUsualObject({})).toBeTruthy();
    expect(isUsualObject(fn)).toBeFalsy();
    expect(isUsualObject(Symbol('sym'))).toBeFalsy();
    expect(isUsualObject(new Set())).toBeFalsy();
    expect(isUsualObject(new Map())).toBeFalsy();
    expect(isUsualObject(new Date())).toBeFalsy();
    expect(isUsualObject(/^reg$/)).toBeFalsy();
    expect(isUsualObject(new File([new Blob()], 'name'))).toBeFalsy();
    expect(isUsualObject(new Blob())).toBeFalsy();
    expect(isUsualObject(new FormData())).toBeFalsy();
    expect(isUsualObject(new ArrayBuffer(8))).toBeFalsy();
    expect(isUsualObject(document)).toBeFalsy();
    expect(isUsualObject(window)).toBeFalsy();
    expect(isUsualObject(new Promise(fn))).toBeFalsy();
    expect(isUsualObject({
      pipe: () => true,
      subscribe: () => true,
    })).toBeFalsy();
    expect(isUsualObject(new Int32Array())).toBeFalsy();
    expect(isUsualObject(new Float64Array())).toBeFalsy();
  });
});
