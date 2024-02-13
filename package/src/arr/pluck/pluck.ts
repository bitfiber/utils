import {Obj} from '../../common';

/**
 * Returns an array with values, each of which corresponds to the value of a certain array item field
 * @param arr - array of objects
 * @param fieldName - name of the array item field from which the value is to be taken
 */
export function pluck<T extends Obj, F extends keyof T>(arr: T[], fieldName: F): (T[F])[] {
  const result: (T[F])[] = [];
  arr.forEach(item => {
    result.push(item[fieldName]);
  });
  return result;
}
