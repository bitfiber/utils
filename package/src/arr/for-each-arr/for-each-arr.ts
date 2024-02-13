import {Arr, INTERRUPT, ValueUnion} from '../../common';

/**
 * Iterates through all the items of an array and calls a handler for each item
 * If the handler returns INTERRUPT, the loop will be interrupted
 * @param arr - an array or any typed array
 * @param handler - function called for each item
 * @param reverse - iterates in reverse order if true
 */
export function forEachArr<T extends Arr, V extends ValueUnion<T>>(arr: T,
  handler: (value: V, index: number, arr: T) => any, reverse?: boolean): void {
  if (reverse) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (handler(arr[i], i, arr) === INTERRUPT) {
        return;
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (handler(arr[i], i, arr) === INTERRUPT) {
        return;
      }
    }
  }
}
