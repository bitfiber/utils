import {mapObjToArr} from '../';

describe('@bitfiber/utils/obj/mapObjToArr', () => {
  it('Test', () => {
    expect(mapObjToArr({
      key1: 'value1',
      key2: 'value2',
    }, (value, key) => key + value))
      .toEqual(['key1value1', 'key2value2']);
  });
});
