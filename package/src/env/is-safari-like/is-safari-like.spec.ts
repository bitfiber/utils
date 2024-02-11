import {setUserAgent, isChromeLike, isFirefoxLike, isSafariLike} from '../';

describe('@bitfiber/utils/env/isSafariLike', () => {
  it('Browser is Safari like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    );
    expect(isSafariLike()).toBeTruthy();
  });

  it('FireFox like is not Safari like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:78.0) Gecko/20100101 Firefox/78.0',
    );
    expect(isFirefoxLike()).toBeTruthy();
    expect(isSafariLike()).toBeFalsy();
  });

  it('Chrome like is not Safari like', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (X11; Linux x86_64; SMARTEMB Build/3.11.9102) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/98.0.4758.101 Chrome/98.0.4758.101 Safari/537.36',
    );
    expect(isChromeLike()).toBeTruthy();
    expect(isSafariLike()).toBeFalsy();
  });
});
