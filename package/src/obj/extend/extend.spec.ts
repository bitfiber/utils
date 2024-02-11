import {extend, extendAll} from '../';

describe('@bitfiber/utils/obj/extend', () => {
  it('Test', () => {
    const obj1 = {
      key1: 'value1',
      key2: 'value2',
      key3: {
        subKey1: 'subValue1',
        subKey2: 'subValue2',
      },
    };

    const obj2 = {
      key2: 'value22',
      key3: {
        subKey1: 'subValue11',
        subKey3: 'subValue33',
      },
      key4: 'value44',
    };

    const result = extend(obj1, obj2);

    expect(result === obj1).toBeTruthy();
    expect(result === obj2).toBeFalsy();
    expect(result.key3 === obj2.key3).toBeTruthy();

    expect(result)
      .toEqual({
        key1: 'value1',
        key2: 'value22',
        key3: {
          subKey1: 'subValue11',
          subKey3: 'subValue33',
        },
        key4: 'value44',
      });
  });
});

describe('@bitfiber/utils/obj/extendAll', () => {
  it('Test', () => {
    const obj1 = {
      key1: 'value1',
      key2: 'value2',
      key3: {
        subKey1: 'subValue1',
        subKey2: 'subValue2',
      },
    };

    const obj2 = {
      key2: 'value22',
      key3: {
        subKey1: 'subValue11',
        subKey3: 'subValue33',
      },
      key4: 'value44',
    };

    const result = extendAll(obj1, obj2);

    expect(result === obj1).toBeTruthy();
    expect(result === obj2).toBeFalsy();
    expect(result.key3 === obj2.key3).toBeFalsy();

    expect(result)
      .toEqual({
        key1: 'value1',
        key2: 'value22',
        key3: {
          subKey1: 'subValue11',
          subKey2: 'subValue2',
          subKey3: 'subValue33',
        },
        key4: 'value44',
      });
  });
});
