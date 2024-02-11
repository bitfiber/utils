import {NumStr, BfError, INTERRUPT, isNumber, isFunction, isMap, isSet, isObject, hasIterator} from '../';
import {forEachArr} from '../../arr';
import {forEachObj} from '../../obj';

/**
 * Iterates through all the items of any iterable object and calls a handler for each item
 * If the handler returns INTERRUPT, the loop will be interrupted
 * @param obj - any iterable object
 * @param handler - function called for each item
 * @param reverse - iterates in reverse order if true
 */
export function forEach(obj: any, handler: (value: any, key: NumStr, obj: any) => any, reverse?: boolean): void {
  if (hasIterator(obj)) {
    if (isMap(obj)) {
      const iterable = Array.from(obj);
      forEachArr(iterable, entry => handler(entry[1], entry[0], obj), reverse);
    } else if (isFunction(obj.forEach) || isNumber(obj.length)) {
      const iterable: any = isSet(obj) ? Array.from(obj) : obj;
      forEachArr(iterable, (value, i) => handler(value, i, obj), reverse);
    } else {
      let i = 0;
      for (const item of obj) {
        if (handler(item, i++, obj) === INTERRUPT) {
          return;
        }
      }
    }
  } else if (isObject(obj)) {
    forEachObj(obj, handler);
  } else {
    throw new BfError('Invalid iterable object', {
      code: 'bf_utils_forEach_1',
      data: obj,
    });
  }
}
