import {setUserAgent, isDesktop, isTV, isTablet, isMobile} from '../';

describe('@bitfiber/utils/env/isDesktop', () => {
  it('Platform is desktop', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Safari/605.1.15 [ip:80.181.52.69]',
    );
    expect(isDesktop()).toBeTruthy();
  });

  it('TV is not desktop', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (SMART-TV; X11; Linux arm86) AppleWebkit/537.42 (KHTML, like Gecko) Chromium/25.0.1349',
    );
    expect(isTV()).toBeTruthy();
    expect(isDesktop()).toBeFalsy();
  });

  it('Tablet is not desktop', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 6.0.1; SM-T580 Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.101 Safari/537.36',
    );
    expect(isTablet()).toBeTruthy();
    expect(isDesktop()).toBeFalsy();
  });

  it('Mobile is not desktop', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 9; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36',
    );
    expect(isMobile()).toBeTruthy();
    expect(isDesktop()).toBeFalsy();
  });
});
