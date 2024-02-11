import {isDefined, Obj} from '../../';
import {forEachObj} from '../';

/**
 * Returns a new object with the fields of the passed object, excluding the specified set of fields
 * @param obj - any object
 * @param fields - set of fields to be excluded
 */
export function exclude<T extends Obj, K extends keyof T>(obj: T, ...fields: K[]): Omit<T, K> {
  const result = <Omit<T, K>>{};
  forEachObj(obj, (value, key) => {
    if (isDefined(value) && !fields.includes(<K>key)) {
      // @ts-ignore
      result[key] = value;
    }
  });
  return result;
}
