import {indexBy} from '../';

const arr = [
  {
    id: 1,
    name: 'n1',
  }, {
    id: 2,
    name: 'n2',
  }, {
    id: 3,
    name: 'n3',
  },
];

describe('@bitfiber/utils/arr/indexBy', () => {
  it('Field name', () => {
    expect(indexBy([], 'name')).toEqual({});

    expect(indexBy(arr, 'name')).toEqual({
      n1: {
        id: 1,
        name: 'n1',
      },
      n2: {
        id: 2,
        name: 'n2',
      },
      n3: {
        id: 3,
        name: 'n3',
      },
    });
  });

  it('Handler', () => {
    expect(indexBy(arr, item => item.name)).toEqual({
      n1: {
        id: 1,
        name: 'n1',
      },
      n2: {
        id: 2,
        name: 'n2',
      },
      n3: {
        id: 3,
        name: 'n3',
      },
    });
  });
});
