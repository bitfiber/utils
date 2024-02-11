import {getUniqueNumId, isNumber} from '../';

describe('@bitfiber/utils/getUniqueNumId', () => {
  it('Test', () => {
    const uid1 = getUniqueNumId();
    const uid2 = getUniqueNumId();
    expect(isNumber(uid1)).toBeTruthy();
    expect(isNumber(uid2)).toBeTruthy();
    expect(uid1 !== uid2).toBeTruthy();
  });
});
