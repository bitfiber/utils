import {setUserAgent, isTV, isDesktop, isTablet, isMobile} from '../';

describe('@bitfiber/utils/env/isTV', () => {
  it('Platform is TV', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (PlayStation; PlayStation 4/8.01) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15 LinkWithOtherServices/605.1.15',
    );
    expect(isTV()).toBeTruthy();
  });

  it('Desktop is not TV', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(isDesktop()).toBeTruthy();
    expect(isTV()).toBeFalsy();
  });

  it('Tablet is not TV', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPad; CPU OS 15_8_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.1',
    );
    expect(isTablet()).toBeTruthy();
    expect(isTV()).toBeFalsy();
  });

  it('Mobile is not TV', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 13; SM-A146U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.230 Mobile Safari/537.36 OPR/80.1.4244.77335',
    );
    expect(isMobile()).toBeTruthy();
    expect(isTV()).toBeFalsy();
  });
});
