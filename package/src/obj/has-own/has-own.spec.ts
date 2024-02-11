import {hasOwn} from '../';

describe('@bitfiber/utils/obj/hasOwn', () => {
  it('Test', () => {
    const obj = {a: 1};
    expect(hasOwn(obj, 'a')).toBeTruthy();
    expect(hasOwn(obj, 'toString')).toBeFalsy();
  });
});
