import {values} from '../';

describe('@bitfiber/utils/obj/values', () => {
  it('Test', () => {
    expect(values({
      key1: 'value1',
      key2: 'value2',
    })).toEqual(['value1', 'value2']);
  });
});
