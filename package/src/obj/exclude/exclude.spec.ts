import {exclude} from '../';

describe('@bitfiber/utils/obj/exclude', () => {
  it('Test', () => {
    expect(exclude({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    }, 'key2', 'key3'))
      .toEqual({key1: 'value1'});
  });
});
