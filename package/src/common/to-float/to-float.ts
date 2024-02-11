import {NumStr, isNumber} from '../';

/**
 * Converts a string to a float and replaces NaN and Infinity with 0
 * @param value - a string or number
 */
export function toFloat(value: NumStr): number {
  const num = isNumber(value) ? value : parseFloat(value);
  return isFinite(num) ? num : 0;
}
