import {pluck} from '../';

describe('@bitfiber/utils/arr/pluck', () => {
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

  it('Test', () => {
    expect(pluck([], 'name')).toEqual([]);
    expect(pluck(arr, 'name')).toEqual(['n1', 'n2', 'n3']);
  });
});
