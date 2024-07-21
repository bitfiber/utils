import {isNumber, Nullish} from '../../common';
import {round} from '../';

/**
 * Represents options type for the inRange function
 */
export interface InRangeOptions {

  /**
   * If the minimum is specified and the value is less than the minimum,
   * the value will be replaced with the minimum
   */
  min?: number;

  /**
   * If the maximum is specified and the value is greater than the maximum,
   * the value will be replaced with the maximum
   */
  max?: number;

  /**
   * If the precision is specified, the value will be rounded to the number of decimal places
   */
  precision?: number;

  /**
   * If true, the empty value will be replaced with
   * either the defined minimum or defined maximum if the maximum is less than 0 or 0
   */
  required?: boolean;
}

/**
 * Converts the numeric value to a new number according to the options
 * @param value - numeric value
 * @param options - options for converting the numeric value
 */
export function inRange(value: number | Nullish, options: InRangeOptions = {}): number | null {
  let newValue = isNumber(value)
    ? (isNumber(options.precision)
      ? round(value, options.precision)
      : value)
    : null;

  if (isNumber(newValue)) {
    if (isNumber(options.min) && newValue < options.min) {
      newValue = options.min;
    }

    if (isNumber(options.max) && newValue > options.max) {
      newValue = options.max;
    }
  } else if (options.required) {
    newValue = options.min || (isNumber(options.max) && options.max < 0 ? options.max : 0);
  }

  return newValue;
}
