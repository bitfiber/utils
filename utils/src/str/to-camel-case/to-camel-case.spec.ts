import {toCamelCase} from '../';

describe('@bitfiber/utils/str/toCamelCase', () => {
  it('Converts snake_case to camelCase', () => {
    const inputString = 'convert_this_string';
    const expectedResult = 'convertThisString';
    expect(toCamelCase(inputString)).toBe(expectedResult);
  });

  it('Converts kebab-case to camelCase', () => {
    const inputString = 'convert-this-string';
    const expectedResult = 'convertThisString';
    expect(toCamelCase(inputString)).toBe(expectedResult);
  });

  it('Converts space-separated words to camelCase', () => {
    const inputString = 'convert this string';
    const expectedResult = 'convertThisString';
    expect(toCamelCase(inputString)).toBe(expectedResult);
  });

  it('Does not modify already camelCase string', () => {
    const inputString = 'alreadyCamelCase';
    expect(toCamelCase(inputString)).toBe(inputString);
  });

  it('Handles empty string', () => {
    const inputString = '';
    expect(toCamelCase(inputString)).toBe('');
  });
});
