import {Obj} from '../../common';

/**
 * Makes an object read-only
 * @param obj - any object
 */
export function constant<T extends Obj>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}
