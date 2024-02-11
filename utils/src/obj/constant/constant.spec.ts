import {constant} from '../';

describe('@bitfiber/utils/obj/constant', () => {
  it('Test', () => {
    const obj = constant({a: 1});
    try {
      // @ts-ignore
      obj.a = 5;
    } catch (error: any) {
      expect(error.message.startsWith('Cannot assign to read only property')).toBeTruthy();
    }
  });
});
