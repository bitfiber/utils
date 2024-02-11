import {setUserAgent, isChromeLike, isFirefoxLike, isSafariLike} from '../';

describe('@bitfiber/utils/env/isChromeLike', () => {
  it('Browser is Chrome like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (X11; U; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/113.0.5662.220 Chrome/113.0.5662.220 Safari/537.36',
    );
    expect(isChromeLike()).toBeTruthy();
  });

  it('FireFox like is not Chrome like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Android 10; Mobile; rv:122.0) Gecko/122.0 Firefox/122.0',
    );
    expect(isFirefoxLike()).toBeTruthy();
    expect(isChromeLike()).toBeFalsy();
  });

  it('Safari like is not Chrome like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    );
    expect(isSafariLike()).toBeTruthy();
    expect(isChromeLike()).toBeFalsy();
  });
});
