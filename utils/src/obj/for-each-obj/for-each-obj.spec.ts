import {Obj, INTERRUPT, toInt} from '../../';
import {forEachObj} from '../';

describe('@bitfiber/utils/obj/forEachObj', () => {
  it('Test', () => {
    const test = (iterable: Obj, howMuch = 5) => {
      let i = 0;
      let last = 0;

      forEachObj(iterable, (item: number): any => {
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
    };

    test({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    });
    test({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    }, 3);
  });
});
