import {Obj} from '../';

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
