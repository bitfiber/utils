import {cnd} from '../';

const Alex = 'Alex';
const Mary = 'Mary';
const Jack = 'Jack';
const objA = {name: Alex};
const objM = {name: Mary};
const objJ = {name: Jack};

describe('@bitfiber/utils/arr/cnd', () => {
  it('Strict comparison', () => {
    expect(cnd(value => value.name === 'Alex')(objA)).toBeTruthy();
    expect(cnd({is: objA})(objA)).toBeTruthy();
    expect(cnd({is: Alex})(Alex)).toBeTruthy();
    expect(cnd({or: [objA, objM]})(objM)).toBeTruthy();
    expect(cnd({or: [Alex, Mary]})(Alex)).toBeTruthy();
    expect(cnd({not: [objA, objM]})(objJ)).toBeTruthy();
    expect(cnd({not: [Alex, Mary]})(Jack)).toBeTruthy();
  });

  it('Equivalence comparison', () => {
    expect(cnd({equal: objA})({name: 'Alex'})).toBeTruthy();
    expect(cnd({equal: /^Alex$/})(Alex)).toBeTruthy();
    expect(cnd({orEqual: [objA, objJ]})({name: 'Jack'})).toBeTruthy();
    expect(cnd({orEqual: [/^Alex$/, /^Mary$/]})(Mary)).toBeTruthy();
    expect(cnd({notEqual: [objA]})({name: 'Jack'})).toBeTruthy();
    expect(cnd({notEqual: [/^Alex$/, /^Mary$/]})(Jack)).toBeTruthy();
  });

  it('Strict comparison by fields', () => {
    expect(cnd({name: {is: 'Alex'}})(objA)).toBeTruthy();
    expect(cnd({name: {or: ['Alex', 'Mary']}})(objA)).toBeTruthy();
    expect(cnd({name: {not: ['Alex', 'Mary']}})(objJ)).toBeTruthy();
    expect(cnd({name: {is: /^Alex$/}})(objA)).toBeFalsy();
    expect(cnd({name: {or: [/^Alex$/, /^Mary$/]}})(objM)).toBeFalsy();
    expect(cnd({name: {not: [/^Alex$/, /^Mary$/]}})(objJ)).toBeTruthy();
  });

  it('Equivalence comparison by fields', () => {
    expect(cnd({name: {equal: 'Alex'}})(objA)).toBeTruthy();
    expect(cnd({name: {orEqual: ['Alex', 'Mary']}})(objA)).toBeTruthy();
    expect(cnd({name: {notEqual: ['Alex', 'Mary']}})(objJ)).toBeTruthy();
    expect(cnd({name: /^Alex$/})(objA)).toBeTruthy();
    expect(cnd({name: {equal: /^Alex$/}})(objA)).toBeTruthy();
    expect(cnd({name: {orEqual: [/^Alex$/, /^Mary$/]}})(objM)).toBeTruthy();
    expect(cnd({name: {notEqual: [/^Alex$/, /^Mary$/]}})(objJ)).toBeTruthy();
  });
});
