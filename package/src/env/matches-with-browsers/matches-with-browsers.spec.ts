import {setUserAgent, matchesWithBrowsers} from '../';

describe('@bitfiber/utils/env/matchesWithBrowsers', () => {
  it('Browsers', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(matchesWithBrowsers({chrome: ''})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '96.0.4664.110'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '~96'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '~96.0.4664'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '>=95.5'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '>=96.0.4664'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '>95'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '<=96.0.4664'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '<=96.0.5600'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '<96.1'})).toBeTruthy();
    expect(matchesWithBrowsers({chrome: '96'})).toBeFalsy();
    expect(matchesWithBrowsers({chrome: '96.0.4665.110'})).toBeFalsy();
    expect(matchesWithBrowsers({chrome: '~96.1'})).toBeFalsy();
    expect(matchesWithBrowsers({chrome: '~96.0.4764'})).toBeFalsy();
    expect(matchesWithBrowsers({chrome: '>=97.5'})).toBeFalsy();
    expect(matchesWithBrowsers({chrome: '>96'})).toBeFalsy();
    expect(matchesWithBrowsers({chrome: '<=95.9.5600'})).toBeFalsy();
    expect(matchesWithBrowsers({chrome: '<95.10'})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: ''})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: '96.0.4664.110'})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: '~96'})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: '~96.0.4664'})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: '>=95.5'})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: '>95'})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: '<=96.0.5600'})).toBeFalsy();
    expect(matchesWithBrowsers({firefox: '<96.1'})).toBeFalsy();
    expect(matchesWithBrowsers({
      firefox: '',
      chrome: '',
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      firefox: '96.0.4664.110',
      chrome: '96.0.4664.110',
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      firefox: '~96',
      chrome: '~96',
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      firefox: '~96.0.4664',
      chrome: '~96.0.4664',
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      firefox: '>=95.5',
      chrome: '>=95.5',
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      firefox: '>95',
      chrome: '>95',
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      firefox: '<=96.0.5600',
      chrome: '<=96.0.5600',
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      firefox: '<96.1',
      chrome: '<96.1',
    })).toBeTruthy();
  });

  it('Engines', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(matchesWithBrowsers({engines: {blink: ''}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '96.0.4664.110'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '~96'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '~96.0.4664'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '>=95.5'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '>=96.0.4664'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '>95'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '<=96.0.4664'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '<=96.0.5600'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '<96.1'}})).toBeTruthy();
    expect(matchesWithBrowsers({engines: {blink: '96'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {blink: '96.0.4665.110'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {blink: '~96.1'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {blink: '~96.0.4764'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {blink: '>=97.5'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {blink: '>96'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {blink: '<=95.9.5600'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {blink: '<95.10'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: ''}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: '96.0.4664.110'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: '~96'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: '~96.0.4664'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: '>=95.5'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: '>95'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: '<=96.0.5600'}})).toBeFalsy();
    expect(matchesWithBrowsers({engines: {gecko: '<96.1'}})).toBeFalsy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '',
        blink: '',
      },
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '96.0.4664.110',
        blink: '96.0.4664.110',
      },
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '~96',
        blink: '~96',
      },
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '~96.0.4664',
        blink: '~96.0.4664',
      },
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '>=95.5',
        blink: '>=95.5',
      },
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '>95',
        blink: '>95',
      },
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '<=96.0.5600',
        blink: '<=96.0.5600',
      },
    })).toBeTruthy();
    expect(matchesWithBrowsers({
      engines: {
        gecko: '<96.1',
        blink: '<96.1',
      },
    })).toBeTruthy();
  });
});
