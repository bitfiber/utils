import {within} from '../';

const arr = [10, 20, 30, 40, 50, 60, 70];

describe('@bitfiber/utils/arr/within', () => {
  it('Positive index', () => {
    expect(within(arr, 0)).toBe(10);
    expect(within(arr, 2)).toBe(30);
    expect(within(arr, 6)).toBe(70);
    expect(within(arr, 7)).toBe(10);
    expect(within(arr, 9)).toBe(30);
    expect(within(arr, 13)).toBe(70);
  });

  it('Negative index', () => {
    expect(within(arr, -1)).toBe(70);
    expect(within(arr, -3)).toBe(50);
    expect(within(arr, -7)).toBe(10);
    expect(within(arr, -8)).toBe(70);
    expect(within(arr, -10)).toBe(50);
    expect(within(arr, -14)).toBe(10);
  });
});
