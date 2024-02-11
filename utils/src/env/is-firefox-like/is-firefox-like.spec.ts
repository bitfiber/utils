import {setUserAgent, isFirefoxLike, isChromeLike, isSafariLike} from '../';

describe('@bitfiber/utils/env/isFirefoxLike', () => {
  it('Browser is FireFox like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Android 10; Mobile; rv:122.0) Gecko/122.0 Firefox/122.0',
    );
    expect(isFirefoxLike()).toBeTruthy();
  });

  it('Chrome like is not FireFox like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/65.0.3325.181 Chrome/65.0.3325.181 Safari/537.36',
    );
    expect(isChromeLike()).toBeTruthy();
    expect(isFirefoxLike()).toBeFalsy();
  });

  it('Safari like is not FireFox like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    );
    expect(isSafariLike()).toBeTruthy();
    expect(isFirefoxLike()).toBeFalsy();
  });
});
