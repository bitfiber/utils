import {setUserAgent, getEngine} from '../';

describe('@bitfiber/utils/env/getEngine', () => {
  it('Test', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    );
    expect(getEngine().name).toBe('blink');
    expect(getEngine().version).toBe('96.0.4664.110');
    expect(getEngine().major).toBe('96');
  });
});
