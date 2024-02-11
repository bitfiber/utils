import {setUserAgent, isMobile, isTV, isDesktop, isTablet} from '../';

describe('@bitfiber/utils/env/isMobile', () => {
  it('Platform is mobile', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Xiaomi_MDT2_TD-LTE/V1 Linux/3.18.31 Android/7.1 Release/5.15.2017 Browser/AppleWebKit537.36 Mobile Safari/537.36 System/Android 7.1 XiaoMi/MiuiBrowser/8.7.7',
    );
    expect(isMobile()).toBeTruthy();
  });

  it('TV is not mobile', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'AppleCoreMedia/1.0.0.21L5195h (Apple TV; U; CPU OS 17_4 like Mac OS X; en_us)',
    );
    expect(isTV()).toBeTruthy();
    expect(isMobile()).toBeFalsy();
  });

  it('Desktop is not mobile', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1',
    );
    expect(isDesktop()).toBeTruthy();
    expect(isMobile()).toBeFalsy();
  });

  it('Tablet is not mobile', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 11; Lenovo YT-J706X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    );
    expect(isTablet()).toBeTruthy();
    expect(isMobile()).toBeFalsy();
  });
});
