import {at} from '../';

const arr = [10, 20, 30, 40, 50, 60, 70];

describe('@bitfiber/utils/arr/at', () => {
  it('Positive index', () => {
    expect(at(arr, 0)).toBe(10);
    expect(at(arr, 2)).toBe(30);
    expect(at(arr, 6)).toBe(70);
    expect(at(arr, 7)).toBeUndefined();
  });

  it('Negative index', () => {
    expect(at(arr, -1)).toBe(70);
    expect(at(arr, -3)).toBe(50);
    expect(at(arr, -7)).toBe(10);
    expect(at(arr, -8)).toBeUndefined();
  });
});
