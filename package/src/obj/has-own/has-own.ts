import {Obj, NumStrSym} from '../../';

/**
 * Returns true if the object has the indicated property as its own property.
 * If the property is inherited, or does not exist, the method returns false
 * @param obj - any object
 * @param property
 */
export function hasOwn(obj: Obj, property: NumStrSym): boolean {
  // todo: change on 'Object.hasOwn' with ES2022
  return Object.prototype.hasOwnProperty.call(obj, property);
}
