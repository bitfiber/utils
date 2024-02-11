/**
 * Returns a random integer between 0 and number, not exceeding a certain number of digits
 * @param numberOfDigits - number of digits (default: 7, maximum: 15)
 */
export function random(numberOfDigits = 7): number {
  numberOfDigits = numberOfDigits <= 15 ? numberOfDigits : 15;
  return Math.round(Math.random() * Math.pow(10, numberOfDigits));
}
