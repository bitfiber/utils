import {Obj, ValueUnion} from '../../common';
import {forEachObj} from '../';

/**
 * Returns an array, which has the mapped values of object fields
 * @param obj - any object
 * @param handler - function called for each field
 */
export function mapObjToArr<T extends Obj, K extends keyof T, R>(
  obj: T,
  handler: (value: ValueUnion<T>, key: K, obj: T) => R,
): R[] {
  const result: R[] = [];
  forEachObj(obj, (value, key) => result.push(handler(value, <K>key, obj)));
  return result;
}
