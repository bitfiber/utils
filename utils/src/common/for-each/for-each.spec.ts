import {NumStr, INTERRUPT, toInt, forEach} from '../';

describe('@bitfiber/utils/forEach', () => {
  it('forEach', () => {
    const test = (iterable: any, howMuch = 5) => {
      let i = 0;
      let last = 0;

      forEach(iterable, (item: NumStr): any => {
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

      forEach(iterable, (item: NumStr): any => {
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

    test('12345');
    test('12345', 2);
    test([1, 2, 3, 4, 5]);
    test([1, 2, 3, 4, 5], 3);
    test(new Int32Array([1, 2, 3, 4, 5]));
    test(new Int32Array([1, 2, 3, 4, 5]), 2);
    test(new Set([1, 2, 3, 4, 5]));
    test(new Set([1, 2, 3, 4, 5]), 1);
    test(new Map([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]));
    test(new Map([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]), 3);

    (function (...args: any[]) {
      test(args);
      // eslint-disable-next-line prefer-rest-params
      test(arguments);
    }(1, 2, 3, 4, 5));

    (function (...args: any[]) {
      test(args, 3);
      // eslint-disable-next-line prefer-rest-params
      test(arguments, 2);
    }(1, 2, 3, 4, 5));
  });
});
