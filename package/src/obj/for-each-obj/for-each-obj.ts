import {Obj, INTERRUPT, ValueUnion} from '../../common';
import {hasOwn} from '../';

/**
 * Iterates through all the fields of an object and calls a handler for each field
 * If the handler returns INTERRUPT, the loop will be interrupted
 * @param obj - any object
 * @param handler - function called for each field
 */
export function forEachObj<T extends Obj, K extends keyof T>(obj: T,
  handler: (value: ValueUnion<T>, key: K, obj: T) => any): void {
  for (const key in obj) {
    if (hasOwn(obj, key) && handler(obj[key], <Extract<K, string>>key, obj) === INTERRUPT) {
      return;
    }
  }
}
