import {round} from '../';

describe('@bitfiber/utils/num/round', () => {
  it('Positive number', () => {
    expect(round(NaN)).toBe(0);
    expect(round(Infinity)).toBe(0);
    expect(round(10)).toBe(10);
    expect(round(10.111)).toBe(10);
    expect(round(10.111, 1)).toBe(10.1);
    expect(round(10.166, 1)).toBe(10.2);
    expect(round(10.111, 2)).toBe(10.11);
    expect(round(10.166, 2)).toBe(10.17);
  });

  it('Negative number', () => {
    expect(round(-10)).toBe(-10);
    expect(round(-10.111)).toBe(-10);
    expect(round(-10.111, 1)).toBe(-10.1);
    expect(round(-10.166, 1)).toBe(-10.2);
    expect(round(-10.111, 2)).toBe(-10.11);
    expect(round(-10.166, 2)).toBe(-10.17);
  });
});
