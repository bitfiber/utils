import {equals, isDefined, isUndefined, Obj} from '../../common';
import {forEachObj} from '../';

/**
 * Represents response of the diffObj function
 */
export interface ObjDiff<T extends Obj> {

  /**
   * Contains equal fields for object 1 and object 2
   */
  equal: Partial<T>;

  /**
   * Contains fields that are only in object 1 or are not equal to the fields of object 2
   */
  notEqual1: Partial<T>;

  /**
   * Contains fields that are only in object 2 or are not equal to the fields of object 1
   */
  notEqual2: Partial<T>;

  /**
   * Contains fields that are only in object 1
   */
  only1: Partial<T>;

  /**
   * Contains fields that are only in object 2
   */
  only2: Partial<T>;

  /**
   * True if notEqual1 and notEqual2 are empty, otherwise false
   */
  isEqual: boolean;
}

/**
 * Returns the difference between two objects
 * @param obj1 - any object 1
 * @param obj2 - any object 2
 * @param sortFn - if added, arrays and sets will be sorted before comparison
 */
export function diffObj<T1 extends Obj, T2 extends Obj>(obj1: T1, obj2: T2,
  sortFn?: (a: any, b: any) => number): ObjDiff<T1 & T2> {
  let isEqual = true;
  const equal: Partial<T1 & T2> = {};
  const notEqual1: Partial<T1 & T2> = {};
  const notEqual2: Partial<T1 & T2> = {};
  const only1: Partial<T1 & T2> = {};
  const only2: Partial<T1 & T2> = {};

  forEachObj(obj1, (value, key) => {
    if (isDefined(value)) {
      if (equals(value, obj2[key], sortFn)) {
        equal[key] = value;
      } else {
        isEqual = false;
        notEqual1[key] = value;

        if (isDefined(obj2[key])) {
          notEqual2[key] = obj2[key];
        } else {
          only1[key] = notEqual1[key];
        }
      }
    }
  });

  forEachObj(obj2, (value, key) => {
    if (isDefined(value) && isUndefined(equal[key]) && isUndefined(notEqual1[key])) {
      isEqual = false;
      notEqual2[key] = only2[key] = value;
    }
  });

  return {
    equal,
    notEqual1,
    notEqual2,
    only1,
    only2,
    isEqual,
  };
}
