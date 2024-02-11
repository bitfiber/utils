import {stub} from '../';

describe('@bitfiber/utils/stub', () => {
  it('Test', () => {
    expect(stub()).toBeUndefined();
    expect(stub({test: true})).toBeUndefined();
  });
});
