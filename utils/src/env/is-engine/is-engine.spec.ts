import {setUserAgent, isEngine} from '../';

describe('@bitfiber/utils/env/isEngine', () => {
  it('Engine is WebKit by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Mobile/15E148 Safari/604.1',
    );
    expect(isEngine('webkit')).toBeTruthy();
  });

  it('Engine is WebKit by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Mobile/15E148 Safari/604.1 (Ecosia ios@9.2.3.1367)',
    );
    expect(isEngine('webkit', '605.1.15')).toBeTruthy();
  });

  it('Engine is Blink by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3560.184 Safari/537.36',
    );
    expect(isEngine('blink')).toBeTruthy();
  });

  it('Engine is Blink by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3560.184 Safari/537.36',
    );
    expect(isEngine('blink', '~71.0.3560')).toBeTruthy();
  });

  it('Engine is Gecko by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Android 12; Mobile; rv:109.0) Gecko/114.0 Firefox/114.0',
    );
    expect(isEngine('gecko')).toBeTruthy();
  });

  it('Engine is Gecko by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Android 12; Mobile; rv:109.0) Gecko/114.0 Firefox/114.0',
    );
    expect(isEngine('gecko', '~114')).toBeTruthy();
  });
});
