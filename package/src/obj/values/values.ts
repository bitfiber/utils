import {Obj} from '../../common';
import {forEachObj} from '../';

/**
 * Returns an array of values for each object's own enumerable property
 * @param obj - any object
 */
export function values<T>(obj: Obj<T>): T[] {
  const result: T[] = [];
  forEachObj(obj, value => result.push(value));
  return result;
}
