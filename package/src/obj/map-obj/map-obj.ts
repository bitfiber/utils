import {Obj, ValueUnion} from '../../common';
import {forEachObj} from '../';

/**
 * Returns a new object, which has the mapped values of object fields
 * @param obj - any object
 * @param handler - function called for each field
 */
export function mapObj<T extends Obj, K extends keyof T, R>(obj: T,
  handler: (value: ValueUnion<T>, key: K, obj: T) => R): Record<K, R> {
  const result = <Record<K, R>>{};
  forEachObj(obj, (value, key) => result[<K>key] = handler(value, <K>key, obj));
  return result;
}
