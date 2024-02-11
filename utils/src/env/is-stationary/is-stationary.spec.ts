import {setUserAgent, isMobile, isTV, isDesktop, isTablet, isStationary} from '../';

describe('@bitfiber/utils/env/isStationary', () => {
  it('TV is stationary', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Roku4640X/DVP-7.70 (297.70E04154A)',
    );
    expect(isTV()).toBeTruthy();
    expect(isStationary()).toBeTruthy();
  });

  it('Desktop is stationary', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    );
    expect(isDesktop()).toBeTruthy();
    expect(isStationary()).toBeTruthy();
  });

  it('Mobile is not stationary', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 9; VOG-L29 Build/HUAWEIVOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.64 HuaweiBrowser/10.0.2.301 Mobile Safari/537.36',
    );
    expect(isMobile()).toBeTruthy();
    expect(isStationary()).toBeFalsy();
  });

  it('Tablet is not stationary', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 13; SM-T736B Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/120.0.6099.231 Safari/537.36',
    );
    expect(isTablet()).toBeTruthy();
    expect(isStationary()).toBeFalsy();
  });
});
