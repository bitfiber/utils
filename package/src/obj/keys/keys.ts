import {Obj} from '../../common';

/**
 * Returns an array of the object's own enumerable property names
 * @param obj - any object
 */
export function keys<T extends Obj>(obj: T): (keyof T)[] {
  return Object.keys(obj);
}
