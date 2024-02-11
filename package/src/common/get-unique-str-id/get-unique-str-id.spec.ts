import {getUniqueStrId, isString} from '../';

describe('@bitfiber/utils/getUniqueStrId', () => {
  it('Test', () => {
    const uid1 = getUniqueStrId();
    const uid2 = getUniqueStrId();
    expect(isString(uid1)).toBeTruthy();
    expect(isString(uid2)).toBeTruthy();
    expect(uid1 !== uid2).toBeTruthy();
  });
});
