import {random} from '../';

describe('@bitfiber/utils/random', () => {
  it('Test', () => {
    const value1 = random(5);
    const value2 = random(5);
    expect(value1 >= 0 && value1 < 100000).toBeTruthy();
    expect(value2 >= 0 && value2 < 100000).toBeTruthy();
    expect(value1 !== value2).toBeTruthy();
  });
});
