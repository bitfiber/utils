import {Arr, INTERRUPT, NumStr, toInt} from '../../';
import {forEachArr} from '../';

describe('@bitfiber/utils/arr/forEachArr', () => {
  it('Test', () => {
    const test = (iterable: Arr, howMuch = 5) => {
      let i = 0;
      let last = 0;

      forEachArr(iterable, (item: NumStr): any => {
        ++i;
        if (i === howMuch) {
          last = toInt(item);

          if (howMuch < 5) {
            return INTERRUPT;
          }
        }
      });

      expect(i).toBe(howMuch);
      expect(last).toBe(howMuch);

      i = 0;
      last = 0;

      forEachArr(iterable, (item: NumStr): any => {
        ++i;
        if (i === howMuch) {
          last = toInt(item);

          if (howMuch < 5) {
            return INTERRUPT;
          }
        }
      }, true);

      expect(i).toBe(howMuch);
      expect(last).toBe(6 - howMuch);
    };

    test([1, 2, 3, 4, 5]);
    test([1, 2, 3, 4, 5], 3);
    test(new Int32Array([1, 2, 3, 4, 5]));
    test(new Int32Array([1, 2, 3, 4, 5]), 2);
  });
});
