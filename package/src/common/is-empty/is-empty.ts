import {isNumber, isBigInt, isBoolean, isSymbol, isString, isDate, isRegExp, isFunction, isDefined} from '../';
import {hasOwn} from '../../obj';

/**
 * Returns true if the value is empty (null, undefined, NaN, Infinity, '', {}, [], Int32Array(), Set(), Map()),
 * otherwise false
 * @param value - anything
 */
export function isEmpty(value: any): boolean {
  if (isNumber(value) || isBigInt(value) || isBoolean(value) || isSymbol(value)) {
    return false;
  } else if (!value) {
    return true;
  } else if (isString(value) || isDate(value) || isRegExp(value) || isFunction(value)) {
    return false;
  } else if (isFunction(value.forEach)) {
    return value.length === 0 || value.size === 0;
  } else {
    for (const key in value) {
      if (hasOwn(value, key) && isDefined(value[key])) {
        return false;
      }
    }
    return true;
  }
}
