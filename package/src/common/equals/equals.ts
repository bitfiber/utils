import {
  Index, isNaN, isDate, isRegExp, isFunction, isDefined, isMap, isSet, isObject, isArray,
  isTypedArray,
} from '../';
import {hasOwn} from '../../obj';

/**
 * Determines whether two values are equal.
 * The comparison is performed to the full depth of nesting.
 * Objects are equal if they have the same fields with equal values.
 * Arrays and sets are equal if they have the same length and equal values in the same order.
 * Maps are equal if they have the same keys with equal values.
 * Objects, arrays, sets, maps etc. will be ignored if they have been visited to prevent looping
 * @param value1 - anything
 * @param value2 - anything
 * @param sortFn - if added, arrays and sets will be sorted before comparison
 */
export function equals(value1: any, value2: any, sortFn?: (a: any, b: any) => number): boolean {
  return _equals(value1, value2, new Map<any, true>(), sortFn);
}

function _equals(
  obj1: any,
  obj2: any,
  visited: Map<any, true>,
  sortFn?: (a: any, b: any) => number,
): boolean {
  if (obj1 === obj2 || (isNaN(obj1) && isNaN(obj2))) {
    return true;
  } else if (isArray(obj1) || isTypedArray(obj1)) {
    if (visited.has(obj1)) {
      return true;
    }
    visited.set(obj1, true);

    if ((!isArray(obj2) && !isTypedArray(obj2)) || obj1.length !== obj2.length) {
      return false;
    }

    let arr1 = obj1;
    let arr2 = obj2;

    if (sortFn) {
      arr1 = [...obj1].sort(sortFn);
      arr2 = [...obj2].sort(sortFn);
    }

    for (let i = 0; i < arr1.length; i++) {
      if (!_equals(arr1[i], arr2[i], visited, sortFn)) {
        return false;
      }
    }

    return true;
  } else if (isFunction(obj1)) {
    return false;
  } else if (isDate(obj1)) {
    return isDate(obj2) && obj1.getTime() === obj2.getTime();
  } else if (isRegExp(obj1)) {
    return isRegExp(obj2) && obj1.toString() === obj2.toString();
  } else if (isMap(obj1)) {
    if (visited.has(obj1)) {
      return true;
    }
    visited.set(obj1, true);

    if (!isMap(obj2) || obj1.size !== obj2.size) {
      return false;
    }

    const map = new Map<any, true>();

    for (const [key, value] of obj1) {
      if (!_equals(value, obj2.get(key), visited, sortFn)) {
        return false;
      }

      map.set(key, true);
    }

    for (const [key, value] of obj2) {
      if (!map.has(key) && isDefined(value)) {
        return false;
      }
    }

    return true;
  } else if (isSet(obj1)) {
    if (visited.has(obj1)) {
      return true;
    }
    visited.set(obj1, true);

    if (!isSet(obj2) || obj1.size !== obj2.size) {
      return false;
    }

    const arr1 = Array.from(obj1);
    const arr2 = Array.from(obj2);

    if (sortFn) {
      arr1.sort(sortFn);
      arr2.sort(sortFn);
    }

    for (let i = 0; i < arr1.length; i++) {
      if (!_equals(arr1[i], arr2[i], visited, sortFn)) {
        return false;
      }
    }

    return true;
  } else if (isObject(obj1)) {
    if (visited.has(obj1)) {
      return true;
    }
    visited.set(obj1, true);

    if (!isObject(obj2) || isArray(obj2) || isTypedArray(obj2) || isDate(obj2) || isRegExp(obj2)
      || isMap(obj2) || isSet(obj2)) {
      return false;
    }

    const obj: Index<true> = {};

    for (const key in obj1) {
      if (!hasOwn(obj1, key) || isFunction(obj1[key])) {
        continue;
      } else if (!_equals(obj1[key], obj2[key], visited, sortFn)) {
        return false;
      }

      obj[key] = true;
    }

    for (const key in obj2) {
      if (!hasOwn(obj2, key) || isFunction(obj2[key])) {
        continue;
      } else if (!hasOwn(obj, key) && isDefined(obj2[key])) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}
