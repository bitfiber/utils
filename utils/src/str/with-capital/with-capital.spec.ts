import {withCapital} from '../';

describe('@bitfiber/utils/str/withCapital', () => {
  it('Capitalizes the first letter of a lowercase string', () => {
    const inputString = 'capitalize_this';
    const expectedResult = 'Capitalize_this';
    expect(withCapital(inputString)).toBe(expectedResult);
  });

  it('Does not modify an already capitalized string', () => {
    const inputString = 'AlreadyCapitalized';
    expect(withCapital(inputString)).toBe(inputString);
  });

  it('Handles empty string', () => {
    const inputString = '';
    expect(withCapital(inputString)).toBe('');
  });

  it('Capitalizes the first letter of a string with spaces', () => {
    const inputString = 'capitalize this string';
    const expectedResult = 'Capitalize this string';
    expect(withCapital(inputString)).toBe(expectedResult);
  });

  it('Capitalizes the first letter of a string with numbers', () => {
    const inputString = '123abc';
    const expectedResult = '123abc';
    expect(withCapital(inputString)).toBe(expectedResult);
  });
});
