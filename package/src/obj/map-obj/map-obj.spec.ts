import {mapObj} from '../';

describe('@bitfiber/utils/obj/mapObj', () => {
  it('Test', () => {
    expect(mapObj({
      key1: 'value1',
      key2: 'value2',
    }, (value, key) => key + value))
      .toEqual({
        key1: 'key1value1',
        key2: 'key2value2',
      });
  });
});
