import {setUserAgent, isTablet, isTV, isDesktop, isMobile} from '../';

describe('@bitfiber/utils/env/isTablet', () => {
  it('Platform is tablet', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 7.1.2; KFKAWI Build/NS6300) AppleWebKit/537.36 (KHTML, like Gecko) Silk/66.2.10 like Chrome/66.0.3359.126 Safari/537.36',
    );
    expect(isTablet()).toBeTruthy();
  });

  it('TV is not tablet', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.22621',
    );
    expect(isTV()).toBeTruthy();
    expect(isTablet()).toBeFalsy();
  });

  it('Desktop is not tablet', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Macintosh; ARM Mac OS X) AppleWebKit/538.15 (KHTML, like Gecko) Safari/538.15 Version/6.0 Raspbian/8.0 (1:3.8.2.0-0rpi27rpi1g) Epiphany/3.8.2',
    );
    expect(isDesktop()).toBeTruthy();
    expect(isTablet()).toBeFalsy();
  });

  it('Mobile is not tablet', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-A205F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36',
    );
    expect(isMobile()).toBeTruthy();
    expect(isTablet()).toBeFalsy();
  });
});
