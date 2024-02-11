import {deepConstant} from '../';

describe('@bitfiber/utils/obj/deepConstant', () => {
  it('Test', () => {
    const obj = deepConstant({
      a: 1,
      b: {c: 2},
    });

    try {
      // @ts-ignore
      obj.a = 5;
    } catch (error: any) {
      expect(error.message.startsWith('Cannot assign to read only property')).toBeTruthy();
    }

    try {
      obj.b.c = 5;
    } catch (error: any) {
      expect(error.message.startsWith('Cannot assign to read only property')).toBeTruthy();
    }
  });
});
