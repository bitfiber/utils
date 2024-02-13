import {isDefined, Obj} from '../../common';
import {hasOwn} from '../';

/**
 * Returns a new object with the specified set of fields
 * @param obj - any object
 * @param fields - set of fields to be included
 */
export function include<T extends Obj, K extends keyof T>(obj: T, ...fields: K[]): Pick<T, K> {
  const result = <Pick<T, K>>{};
  fields.forEach(key => {
    if (hasOwn(obj, key) && isDefined(obj[key])) {
      result[key] = obj[key];
    }
  });
  return result;
}
