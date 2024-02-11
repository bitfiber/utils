import {fill} from '../';

describe('@bitfiber/utils/arr/fill', () => {
  it('Test', () => {
    expect(fill(0, i => ({id: i}))).toEqual([]);
    expect(fill(5, i => i, 5)).toEqual([5, 6, 7, 8, 9]);
    expect(fill(5, (i, j) => j, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(fill(2, i => ({id: i}))).toEqual([{id: 1}, {id: 2}]);
    expect(fill(2, i => ({id: i}), 5)).toEqual([{id: 5}, {id: 6}]);
  });
});
