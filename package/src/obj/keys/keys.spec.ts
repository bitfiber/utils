import {keys} from '../';

describe('@bitfiber/utils/obj/keys', () => {
  it('Test', () => {
    expect(keys({
      key1: 'value1',
      key2: 'value2',
    })).toEqual(['key1', 'key2']);
  });
});
