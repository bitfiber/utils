import {NumStr} from '../../';
import {ArrDiff} from '../';

/**
 * Returns the difference between two arrays
 * Strict comparison of array items is applied
 * The order doesn't matter
 * @param arr1 - array 1
 * @param arr2 - array 2
 */
export function diffArr<T extends NumStr>(arr1: T[], arr2: T[]): ArrDiff<T> {
  let isEqual = true;
  const only1: T[] = [];
  const only2: T[] = [];
  const equal: T[] = [];
  const map1 = new Map(arr1.map(value => [value, true]));
  const map2 = new Map(arr2.map(value => [value, true]));

  for (const value of map1.keys()) {
    if (!map2.has(value)) {
      isEqual = false;
      only1.push(value);
    } else {
      equal.push(value);
    }
  }

  for (const value of map2.keys()) {
    if (!map1.has(value)) {
      isEqual = false;
      only2.push(value);
    }
  }

  return {
    only1,
    only2,
    equal,
    isEqual,
  };
}
