import {toSortedString} from '../';

function fn() {//
}

describe('@bitfiber/utils/toSortedString', () => {
  it('Test', () => {
    expect(toSortedString('')).toBe('');
    expect(toSortedString(0)).toBe('0');
    expect(toSortedString(-0)).toBe('0');
    expect(toSortedString(NaN)).toBe('NaN');
    expect(toSortedString(Infinity)).toBe('Infinity');
    expect(toSortedString(null)).toBe('null');
    expect(toSortedString(undefined)).toBe('undefined');
    expect(toSortedString(false)).toBe('false');
    expect(toSortedString(true)).toBe('true');
    expect(toSortedString([{test: [[true]]}])).toBe('[{test:[[true]]}]');
    expect(toSortedString([{test: [new Set([true, false])]}])).toBe('[{test:[[false,true]]}]');
    expect(toSortedString([{test: [new Map([[true, 1]])]}])).toBe('[{test:[[[1,true]]]}]');
    expect(toSortedString({test2: ['test21', 'test2'], test1: {}}))
      .toBe('{test1:{},test2:[test2,test21]}');
    expect(toSortedString([{id: 2, name: 'a'}, {id: 1, name: 'b'}]))
      .toBe('[{id:1,name:b},{id:2,name:a}]');
    expect(toSortedString([{id: 1, data: 2}, {id: 2, data: 1}]))
      .toBe('[{data:1,id:2},{data:2,id:1}]');
    expect(
      toSortedString({test2: ['test2'], test1: {}})
      === toSortedString({test1: {}, test2: ['test2']}),
    ).toBeTruthy();
    expect(
      toSortedString({test2: ['test2', 'test21'], test1: {}})
      === toSortedString({test1: {}, test2: ['test21', 'test2']}),
    ).toBeTruthy();
    expect(toSortedString(new Date(1607300542000))).toMatch('2020');
    expect(toSortedString(/^reg$/)).toBe('/^reg$/');
    expect(toSortedString(fn)).toMatch('fn');
  });
});
