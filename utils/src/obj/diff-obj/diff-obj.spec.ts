import {diffObj} from '../';

describe('@bitfiber/utils/obj/diffObj', () => {
  it('Equal objects', () => {
    expect(diffObj({
      key1: 'value1',
      key2: 'value2',
      key3: {
        subKey1: 'subValue1',
        subKey2: 'subValue2',
      },
    }, {
      key1: 'value1',
      key3: {
        subKey1: 'subValue1',
        subKey2: 'subValue2',
      },
      key2: 'value2',
    }))
      .toEqual({
        equal: {
          key1: 'value1',
          key2: 'value2',
          key3: {
            subKey1: 'subValue1',
            subKey2: 'subValue2',
          },
        },
        notEqual1: {},
        notEqual2: {},
        only1: {},
        only2: {},
        isEqual: true,
      });
  });

  it('Non-equal objects', () => {
    expect(diffObj({
      key1: 'value1',
      key2: 'value2',
      key3: {
        subKey1: 'subValue1',
        subKey2: 'subValue2',
      },
    }, {
      key2: 'value2',
      key3: {
        subKey1: 'subValue1',
        subKey3: 'subValue3',
      },
      key4: 'value4',
    }))
      .toEqual({
        equal: {
          key2: 'value2',
        },
        notEqual1: {
          key1: 'value1',
          key3: {
            subKey1: 'subValue1',
            subKey2: 'subValue2',
          },
        },
        notEqual2: {
          key3: {
            subKey1: 'subValue1',
            subKey3: 'subValue3',
          },
          key4: 'value4',
        },
        only1: {key1: 'value1'},
        only2: {key4: 'value4'},
        isEqual: false,
      });
  });
});
