import {isObject, Obj} from '../../';
import {constant} from '../';

/**
 * Makes an object and its nested objects read-only
 * @param obj - any object
 */
export function deepConstant<T extends Obj>(obj: T): Readonly<T> {
  // Gets fields of enumerable and non-enumerable own properties
  const fields = Object.getOwnPropertyNames(obj);

  // Makes nested objects read-only
  fields.forEach(key => {
    if (isObject(obj[key])) {
      deepConstant(obj[key]);
    }
  });

  return constant(obj);
}
