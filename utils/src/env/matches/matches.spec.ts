import {setUserAgent, matches} from '../';

describe('@bitfiber/utils/env/matches', () => {
  it('Browsers', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(matches({anyPlatform: {anyOS: {chrome: ''}}})).toBeTruthy();
    expect(matches({desktop: {windows: {chrome: '96.0.4664.110'}}})).toBeTruthy();
    expect(matches({desktop: {windows: {chrome: '~96.0.4664'}}})).toBeTruthy();
    expect(matches({desktop: {windows: {chrome: '>95'}}})).toBeTruthy();
    expect(matches({desktop: {windows: {chrome: '<96.1'}}})).toBeTruthy();
    expect(matches({desktop: {windows: {chrome: '>100'}}})).toBeFalsy();
    expect(matches({desktop: {macOS: {chrome: '<96.1'}}})).toBeFalsy();
    expect(matches({tablet: {windows: {chrome: '<96.1'}}})).toBeFalsy();
    expect(matches({desktop: {windows: {safari: '<96.1'}}})).toBeFalsy();
    expect(matches({desktop: {windows: {engines: {webkit: '<96.1'}}}})).toBeFalsy();
  });

  it('Engines', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(matches({anyPlatform: {anyOS: {engines: 'blink'}}})).toBeTruthy();
    expect(matches({anyPlatform: {anyOS: {engines: {blink: ''}}}})).toBeTruthy();
    expect(matches({anyPlatform: {anyOS: {engines: {blink: '96.0.4664.110'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: 'blink'}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: ''}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '96.0.4664.110'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '~96'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '~96.0.4664'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '>=95.5'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '>95'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '<=96.0.5600'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '<96.1'}}}})).toBeTruthy();
    expect(matches({desktop: {windows: {engines: {blink: '>100'}}}})).toBeFalsy();
    expect(matches({desktop: {macOS: {engines: {blink: '<96.1'}}}})).toBeFalsy();
    expect(matches({tablet: {windows: {engines: {blink: '<96.1'}}}})).toBeFalsy();
    expect(matches({desktop: {windows: {engines: {webkit: '<96.1'}}}})).toBeFalsy();
  });

  it('osVersion', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(matches({
      desktop: {
        windows: {
          osVersion: '~10',
          chrome: '~96',
        },
      },
    })).toBeTruthy();
    expect(matches({
      desktop: {
        windows: {
          osVersion: '>=10',
          chrome: '>=95.5',
        },
      },
    })).toBeTruthy();
    expect(matches({
      desktop: {
        windows: {
          osVersion: '<11',
          chrome: '<=96.0.5600',
        },
      },
    })).toBeTruthy();
    expect(matches({
      desktop: {
        macOS: {
          osVersion: '>15.3',
          chrome: '<=96.0.5600',
        },
        windows: {
          osVersion: '<11',
          chrome: '<=96.0.5600',
        },
      },
    })).toBeTruthy();
    expect(matches({
      desktop: {
        windows: {
          osVersion: '<9.5',
          chrome: '<=96.0.5600',
        },
      },
    })).toBeFalsy();
  });
});
