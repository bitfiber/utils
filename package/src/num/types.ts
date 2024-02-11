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
