import {setUserAgent, isOS} from '../';

describe('@bitfiber/utils/env/isOS', () => {
  it('OS is Android by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Xiaomi_MDT2_TD-LTE/V1 Linux/3.18.31 Android/7.1 Release/5.15.2017 Browser/AppleWebKit537.36 Mobile Safari/537.36 System/Android 7.1 XiaoMi/MiuiBrowser/8.7.7',
    );
    expect(isOS('android')).toBeTruthy();
  });

  it('OS is Android by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Xiaomi_MDT2_TD-LTE/V1 Linux/3.18.31 Android/7.1 Release/5.15.2017 Browser/AppleWebKit537.36 Mobile Safari/537.36 System/Android 7.1 XiaoMi/MiuiBrowser/8.7.7',
    );
    expect(isOS('android', '>6.4.4')).toBeTruthy();
  });

  it('OS is Apple TV by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'AppleCoreMedia/1.0.0.21L5195h (Apple TV; U; CPU OS 17_4 like Mac OS X; en_us)',
    );
    expect(isOS('appleTV')).toBeTruthy();
  });

  it('OS is Apple TV by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'AppleCoreMedia/1.0.0.21L5195h (Apple TV; U; CPU OS 17_4 like Mac OS X; en_us)',
    );
    expect(isOS('appleTV', '~17')).toBeTruthy();
  });

  it('OS is Linux by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (X11; Linux x86_64; rv:15.0) Gecko/20120724 Debian Iceweasel/15.02',
    );
    expect(isOS('linux')).toBeTruthy();
  });

  it('OS is Linux by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (X11; Linux x86_64; rv:15.0) Gecko/20120724 Debian Iceweasel/15.02',
    );
    expect(isOS('linux', '<=15.0')).toBeTruthy();
  });

  it('OS is IOS by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Mobile/15E148 Safari/604.1 (Ecosia ios@9.2.3.1367)',
    );
    expect(isOS('ios')).toBeTruthy();
  });

  it('OS is IOS by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Mobile/15E148 Safari/604.1 (Ecosia ios@9.2.3.1367)',
    );
    expect(isOS('ios', '17.2.1')).toBeTruthy();
  });

  it('OS is Mac OS by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36 OPR/64.0.3417.54',
    );
    expect(isOS('macOS')).toBeTruthy();
  });

  it('OS is Mac OS by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36 OPR/64.0.3417.54',
    );
    expect(isOS('macOS', '~10.15')).toBeTruthy();
  });

  it('OS is Windows by name', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3560.184 Safari/537.36',
    );
    expect(isOS('windows')).toBeTruthy();
  });

  it('OS is Windows by name and version', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3560.184 Safari/537.36',
    );
    expect(isOS('windows', '>=8.1')).toBeTruthy();
  });
});
