import {Fn, TypedArr, Obj, Nullish} from '../';

/*
 * Why is typeof or constructor used to check type?
 * For 100 000 000 iterations type checking is spending:
 * by typeof: ~75 milliseconds
 * by constructor: ~75 milliseconds
 * by instanceof: ~255 milliseconds
 * by toString.call: ~850 milliseconds
 */

/**
 * Returns true if the value is null, otherwise false
 * @param value - anything
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
 * Returns true if the value is undefined, otherwise false
 * @param value - anything
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

/**
 * Returns true if the value is defined, otherwise false
 * @param value - anything
 */
export function isDefined(value: any): boolean {
  return typeof value !== 'undefined';
}

/**
 * Returns true if the value is undefined or null, otherwise false
 * @param value - anything
 */
export function isNullish(value: any): value is Nullish {
  return isNull(value) || isUndefined(value);
}

/**
 * Returns true if the value is NaN, otherwise false
 * @param value - anything
 */
export function isNaN(value: any): value is typeof NaN {
  return Number.isNaN(value);
}

/**
 * Returns true if the value is a string, otherwise false
 * @param value - anything
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * Returns true if the value is a number, otherwise false
 * @param value - anything
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}

/**
 * Returns true if the value is a big integer, otherwise false
 * @param value - anything
 */
export function isBigInt(value: any): value is bigint {
  return typeof value === 'bigint';
}

/**
 * Returns true if the value is a boolean, otherwise false
 * @param value - anything
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Returns true if the value is a symbol, otherwise false
 * @param value - anything
 */
export function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Returns true if the value is a function, otherwise false
 * @param value - anything
 */
export function isFunction(value: any): value is Fn {
  return typeof value === 'function';
}

/**
 * Returns true if the value is an object, otherwise false
 * @param value - anything
 */
export function isObject(value: any): value is Obj {
  return !!value && typeof value === 'object';
}

/**
 * Returns true if the value is an array, otherwise false
 * @param value - anything
 */
export function isArray(value: any): value is Array<any> {
  return Array.isArray(value);
}

/**
 * Returns true if the value is a set, otherwise false
 * @param value - anything
 */
export function isSet(value: any): value is Set<any> {
  return !!value && value.constructor === Set;
}

/**
 * Returns true if the value is a map, otherwise false
 * @param value - anything
 */
export function isMap(value: any): value is Map<any, any> {
  return !!value && value.constructor === Map;
}

/**
 * Returns true if the value is a date, otherwise false
 * @param value - anything
 */
export function isDate(value: any): value is Date {
  return !!value && value.constructor === Date;
}

/**
 * Returns true if the value is a regular expression, otherwise false
 * @param value - anything
 */
export function isRegExp(value: any): value is RegExp {
  return !!value && value.constructor === RegExp;
}

/**
 * Returns true if the value is a file, otherwise false
 * @param value - anything
 */
export function isFile(value: any): value is File {
  return !!value && value.constructor === File;
}

/**
 * Returns true if the value is a blob, otherwise false
 * @param value - anything
 */
export function isBlob(value: any): value is Blob {
  return !!value && value.constructor === Blob;
}

/**
 * Returns true if the value is form data, otherwise false
 * @param value - anything
 */
export function isFormData(value: any): value is FormData {
  return !!value && value.constructor === FormData;
}

/**
 * Returns true if the value is an array buffer, otherwise false
 * @param value - anything
 */
export function isArrayBuffer(value: any): value is ArrayBuffer {
  return !!value && value.constructor === ArrayBuffer;
}

/**
 * Returns true if the value is a document, otherwise false
 * @param value - anything
 */
export function isDocument(value: any): value is Document {
  return !!value && typeof Document === 'function' && value.constructor === Document;
}

/**
 * Returns true if the value is a window, otherwise false
 * @param value - anything
 */
export function isWindow(value: any): value is Window {
  return !!value && value.window === value;
}

/**
 * Returns true if the value is a promise, otherwise false
 * @param value - anything
 */
export function isPromise(value: any): value is Promise<any> {
  return !!value && (value.constructor === Promise || (isFunction(value.then)
    && isFunction(value.catch)));
}

/**
 * Returns true if the value is an observable, otherwise false
 * @param value - anything
 */
export function isObservable(value: any): boolean {
  return !!value && isFunction(value.pipe) && isFunction(value.subscribe);
}

/**
 * Returns true if the value is a typed array, otherwise false
 * @param value - anything
 */
export function isTypedArray(value: any): value is TypedArr {
  switch (value?.constructor) {
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Float32Array:
    case Float64Array:
    case Uint8Array:
    case Uint8ClampedArray:
    case Uint16Array:
    case Uint32Array:
      // case BigInt64Array:
      // case BigUint64Array:
      return true;
    default:
      return false;
  }
}

/**
 * Returns true if the value is a usual object, otherwise false
 * @param value - anything
 */
export function isUsualObject(value: any): value is Obj {
  return isObject(value) && !isArray(value) && !isTypedArray(value) && !isSet(value)
    && !isMap(value) && !isDate(value) && !isRegExp(value) && !isFile(value) && !isBlob(value)
    && !isFormData(value) && !isArrayBuffer(value) && !isWindow(value) && !isDocument(value)
    && !isPromise(value) && !isObservable(value);
}
