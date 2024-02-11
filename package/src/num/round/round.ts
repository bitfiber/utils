/**
 * Rounds a numeric value to a number with a specified number of decimal places
 * and replaces NaN and Infinity with 0
 * @param value - numeric value
 * @param precision - number of decimal places, default 0
 */
export function round(value: number, precision = 0): number {
  const num = Number(value.toFixed(precision));
  return isFinite(num) ? num : 0;
}
