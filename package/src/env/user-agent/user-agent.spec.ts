import {getUserAgent, setUserAgent} from './user-agent';

describe('@bitfiber/utils/env/userAgent', () => {
  it('User agent is empty', () => {
    expect(getUserAgent()).toBe('');
  });

  it('User agent is not empty', () => {
    // eslint-disable-next-line @stylistic/max-len
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36';
    setUserAgent(ua);
    expect(getUserAgent()).toBe(ua);
  });
});
