import {copy, isDefined, isUsualObject, Obj, ValueIntersection} from '../../common';
import {forEachObj} from '../';

/**
 * Copies all enumerable own properties from one or more source objects to a target object.
 * It returns the modified target object
 * @param target - target object
 * @param sources - source objects
 */
export function extend<T extends Obj, U extends Obj[]>(
  target: T,
  ...sources: U
): T & ValueIntersection<typeof sources> {
  return _extend(target, sources, false, new Map<any, true>());
}

/**
 * Copies all enumerable own properties from one or more source objects to a target object
 * and copies enumerable properties from nested source objects to nested target objects
 * It returns the modified target object
 * @param target - target object
 * @param sources - source objects
 */
export function extendAll<T extends Obj, U extends Obj[]>(
  target: T,
  ...sources: U
): T & ValueIntersection<typeof sources> {
  return _extend(target, sources, true, new Map<any, true>());
}

function _extend<T extends Obj, U extends Obj[]>(target: T, sources: U, deep: boolean,
  visited: Map<any, true>): T & ValueIntersection<typeof sources> {
  sources.forEach(obj => {
    if (obj !== target && !visited.has(obj) && isUsualObject(obj)) {
      visited.set(obj, true);

      forEachObj(obj, (value, key) => {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);

        if (descriptor?.get || descriptor?.set) {
          Object.defineProperty(target, key, descriptor);
        } else if (isDefined(value)) {
          if (deep) {
            if (isUsualObject(target[key]) && isUsualObject(obj[key])) {
              (<any>target)[key] = _extend(target[key], [obj[key]], true, visited);
            } else {
              (<any>target)[key] = copy(obj[key]);
            }
          } else {
            (<any>target)[key] = obj[key];
          }
        }
      });
    }
  });

  return <T & ValueIntersection<typeof sources>>target;
}
