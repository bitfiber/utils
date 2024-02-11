import {
  isNumber, isBigInt, isBoolean, isString, isDate, isRegExp, isFunction, isMap, isSet, isObject, isArray, isTypedArray,
  isBlob, isArrayBuffer, isWindow, isDocument, isFile, isFormData, isPromise, isObservable,
} from '../';
import {forEachObj} from '../../obj';

/**
 * Creates a deep copy of a value of any type
 * Objects, arrays, sets, maps etc. will be ignored if they have been visited to prevent looping
 * @param value - anything
 */
export function copy<T>(value: T): T {
  return _copy(value, new Map());
}

function _copy(value: any, visited: Map<any, any>): any {
  if (!value || isString(value) || isNumber(value) || isBigInt(value) || isBoolean(value) || isFunction(value)) {
    return value;
  } else if (isDate(value)) {
    return new Date(value.getTime());
  } else if (isArray(value)) {
    if (visited.has(value)) {
      return visited.get(value);
    }

    const arr: any[] = [];
    visited.set(value, arr);
    value.forEach(item => arr.push(_copy(item, visited)));

    return arr;
  } else if (isSet(value)) {
    if (visited.has(value)) {
      return visited.get(value);
    }

    const newSet = new Set();
    visited.set(value, newSet);
    value.forEach(item => newSet.add(_copy(item, visited)));

    return newSet;
  } else if (isMap(value)) {
    if (visited.has(value)) {
      return visited.get(value);
    }

    const newMap = new Map();
    visited.set(value, newMap);

    value.forEach((item, key) => newMap.set(_copy(key, visited), _copy(item, visited)));

    return newMap;
  } else if (isRegExp(value)) {
    // @ts-ignore
    const reg = new RegExp(value.source, value.toString().match(/[^/]*$/)[0]);
    reg.lastIndex = value.lastIndex;
    return reg;
  } else if (isBlob(value)) {
    return new Blob([value], {type: value.type});
  } else if (isArrayBuffer(value)) {
    return value.slice(0);
  } else if (isTypedArray(value)) {
    // @ts-ignore
    return new value.constructor(value.buffer.slice(0), value.byteOffset, value.length);
  } else if (isWindow(value) || isDocument(value) || isFile(value) || isFormData(value) || isPromise(value)
    || isObservable(value)) {
    return value;
  } else if (isObject(value)) {
    if (visited.has(value)) {
      return visited.get(value);
    }

    const obj = Object.create(Object.getPrototypeOf(value));
    visited.set(value, obj);

    forEachObj(value, (val, key) => {
      const descriptor = Object.getOwnPropertyDescriptor(value, key);

      if (descriptor?.get || descriptor?.set) {
        Object.defineProperty(obj, key, descriptor);
      } else {
        obj[key] = _copy(val, visited);
      }
    });

    return obj;
  } else {
    return value;
  }
}
