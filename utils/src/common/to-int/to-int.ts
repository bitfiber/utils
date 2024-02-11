import {NumStr, isNumber} from '../';

/**
 * Converts a string to an integer and replaces NaN and Infinity with 0
 * @param value - a string or number
 */
export function toInt(value: NumStr): number {
  const num = isNumber(value) ? value : parseInt(value, 10);
  return isFinite(num) ? num : 0;
}
