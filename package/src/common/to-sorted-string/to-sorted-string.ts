import {isDate, isRegExp, isFunction, isMap, isSet, isObject, isArray, isTypedArray} from '../';

/**
 * Converts any value to a sorted string.
 * Sorts arrays, maps and sets by value and sorts objects by field name before adding them to a string.
 * Objects, arrays, sets, maps etc. will be ignored if they have been visited to prevent looping
 * @param value - anything
 */
export function toSortedString(value: any): string {
  return _toSortedString(value, new Map<any, true>());
}

function _toSortedString(value: any, visited: Map<any, true>): string {
  let str = '';

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
    const arr: string[] = [];
    visited.set(value, true);
    str += '[';
    value.forEach(item => {
      arr.push(_toSortedString(item, visited));
    });
    str = arr.sort().reduce((acc, item, i) => `${acc}${item}${i < arr.length - 1 ? ',' : ''}`, str);
    str += ']';
  } else if (isFunction(value)) {
    str += value.toString();
  } else if (isObject(value) && !isDate(value) && !isRegExp(value)) {
    if (visited.has(value)) {
      return '';
    }
    const fields = Object.keys(value).sort();
    visited.set(value, true);
    str += '{';
    fields.forEach((field, i) => {
      str += `${field}:${_toSortedString(value[field], visited)}${i < fields.length - 1
        ? ','
        : ''}`;
    });
    str += '}';
  } else {
    str += value;
  }

  return str;
}
