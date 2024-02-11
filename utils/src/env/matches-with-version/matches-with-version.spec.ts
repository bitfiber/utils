import {setUserAgent, matchesWithVersion} from '../';

describe('@bitfiber/utils/env/matchesWithVersion', () => {
  it('Test', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(matchesWithVersion('', '')).toBeTruthy();
    expect(matchesWithVersion('', '96.0.4664.110')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '96.0.4664.110')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '~96')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '~96.0.4664')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '>=95.5')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '>=96.0.4664')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '>95')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '<=96.0.4664')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '<=96.0.5600')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '<96.1')).toBeTruthy();
    expect(matchesWithVersion('96.0.4664.110', '96')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '96.0.4665.110')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '~97')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '~96.10.4664')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '>=96.1')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '>97')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '<=95.9.5600')).toBeFalsy();
    expect(matchesWithVersion('96.0.4664.110', '<95.10')).toBeFalsy();
  });
});
