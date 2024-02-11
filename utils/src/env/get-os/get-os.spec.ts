import {setUserAgent, getOS} from '../';

describe('@bitfiber/utils/env/getOS', () => {
  it('Test', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(getOS().name).toBe('windows');
    expect(getOS().version).toBe('10.0');
    expect(getOS().major).toBe('10');
  });
});
