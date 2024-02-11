import {setUserAgent, getBrowser} from '../';

describe('@bitfiber/utils/env/getBrowser', () => {
  it('Test', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(getBrowser().name).toBe('chrome');
    expect(getBrowser().version).toBe('96.0.4664.110');
    expect(getBrowser().major).toBe('96');
  });
});
