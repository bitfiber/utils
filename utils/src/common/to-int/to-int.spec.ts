import {toInt} from '../';

describe('@bitfiber/utils/toInt', () => {
  it('Test', () => {
    expect(toInt('25.5')).toBe(25);
    expect(toInt(1 / 0)).toBe(0);
    expect(toInt(0 / 0)).toBe(0);
  });
});
