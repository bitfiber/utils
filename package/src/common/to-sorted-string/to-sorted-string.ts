import {NumStr, isString, isDate, isRegExp, isFunction, isMap, isSet, isObject, isArray, isTypedArray} from '../';

/**
 * Converts any value to a sorted string.
 * Sorts arrays, maps and sets by value and sorts objects by field name before adding them to a string.
 * Objects, arrays, sets, maps etc. will be ignored if they have been visited to prevent looping
 * @param value - anything
 */
export function toSortedString(value: any): string {
  return _toSortedString(value, null, 0, new Map<any, true>());
}

function _toSortedString(value: any, index: number | null, field: NumStr, visited: Map<any, true>): string {
  let str = index === null ? '' : ((index === 0 ? '' : ',') + (isString(field) ? field + ':' : ''));

  if (isMap(value) || isSet(value)) {
    if (visited.has(value)) {
      return '';
    }
    visited.set(value, true);

    value = Array.from(value);
  }

  if (isArray(value) || isTypedArray(value)) {
    if (visited.has(value)) {
      return '';
    }
    visited.set(value, true);

    str += '[';
    value.sort();
    value.forEach((value: any, i: number) => {
      str += _toSortedString(value, i, i, visited);
    });
    str += ']';
  } else if (isFunction(value)) {
    str += value.toString();
  } else if (isObject(value) && !isDate(value) && !isRegExp(value)) {
    if (visited.has(value)) {
      return '';
    }
    visited.set(value, true);

    const fields = Object.keys(value);

    str += '{';
    fields.sort();
    fields.forEach((field, i) => {
      str += _toSortedString(value[field], i, field, visited);
    });
    str += '}';
  } else {
    str += value;
  }

  return str;
}
