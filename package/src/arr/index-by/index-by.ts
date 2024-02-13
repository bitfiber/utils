import {isFunction, Obj, Index} from '../../common';

/**
 * Returns an object indexed by the values from a specific field of each item
 * or from a function that is executed on each item
 * @param arr - array of objects
 * @param fieldOrFn - the name of the field from which the index value should be taken,
 * or the function that should return the index value
 */
export function indexBy<T extends Obj>(arr: T[], fieldOrFn: string | ((item: T) => string)): Index<T> {
  const result: Index<T> = {};
  arr.forEach(item => {
    const key = isFunction(fieldOrFn) ? fieldOrFn(item) : item[fieldOrFn];
    if (key) {
      result[key] = item;
    }
  });
  return result;
}
