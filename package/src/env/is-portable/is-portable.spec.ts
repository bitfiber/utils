import {setUserAgent, isMobile, isTV, isDesktop, isTablet, isPortable} from '../';

describe('@bitfiber/utils/env/isPortable', () => {
  it('Mobile is portable', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Linux; Android 7.1.2; Redmi Note 5A Prime Build/N2G47H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36 YaApp_Android/9.05 YaSearchBrowser/9.05',
    );
    expect(isMobile()).toBeTruthy();
    expect(isPortable()).toBeTruthy();
  });

  it('Tablet is portable', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Dalvik/2.1.0 (Linux; U; Android 5.0.1; YOGA Tablet 2-1050L Build/LRX22C)',
    );
    expect(isTablet()).toBeTruthy();
    expect(isPortable()).toBeTruthy();
  });

  it('TV is not portable', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Dalvik/2.1.0 (Linux; U; Android 7.0; BRAVIA 4K GB Build/NRD91N.S124)',
    );
    expect(isTV()).toBeTruthy();
    expect(isPortable()).toBeFalsy();
  });

  it('Desktop is not portable', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36',
    );
    expect(isDesktop()).toBeTruthy();
    expect(isPortable()).toBeFalsy();
  });
});
