import {include} from '../';

describe('@bitfiber/utils/obj/include', () => {
  it('Test', () => {
    expect(include({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    }, 'key2', 'key3'))
      .toEqual({
        key2: 'value2',
        key3: 'value3',
      });
  });
});
