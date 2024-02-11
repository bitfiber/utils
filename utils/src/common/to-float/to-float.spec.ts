import {toFloat} from '../';

describe('@bitfiber/utils/toFloat', () => {
  it('Test', () => {
    expect(toFloat('25.5')).toBe(25.5);
    expect(toFloat(0.1 / 0)).toBe(0);
    expect(toFloat(0 / 0)).toBe(0);
  });
});
