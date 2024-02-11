/**
 * Generates a hash value for a given input string for insecure purposes
 * Hash functions are commonly used to convert input data into a fixed-length string of characters,
 * providing a unique representation of the input
 * @param str - The input string to be hashed
 */
export function toHash(str: string): string {
  if (str) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    return hash < 0 ? 'hn' + Math.abs(hash) : 'hp' + hash;
  } else {
    return '';
  }
}
