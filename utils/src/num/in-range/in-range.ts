import {isNumber, Nullish} from '../../';
import {round, InRangeOptions} from '../';

/**
 * Converts the numeric value to a new number according to the options
 * @param value - numeric value
 * @param options - options for converting the numeric value
 */
export function inRange(value: number | Nullish, options: InRangeOptions = {}): number | null {
  let newValue = isNumber(value) ? (isNumber(options.precision) ? round(value, options.precision) : value) : null;

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
