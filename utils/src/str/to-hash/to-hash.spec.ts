import {toHash} from '../';

describe('@bitfiber/utils/str/toHash', () => {
  it('Generates the same results from the same input data', () => {
    const inputString = 'any string';
    const result1 = toHash(inputString);
    const result2 = toHash(inputString);
    expect(result1.length > 0).toBeTruthy();
    expect(result1 === inputString).toBeFalsy();
    expect(result1).toBe(result2);
  });

  it('Handles empty string', () => {
    const inputString = '';
    expect(toHash(inputString)).toBe('');
  });
});
