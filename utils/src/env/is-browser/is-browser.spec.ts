import {setUserAgent, isBrowser} from '../';

describe('@bitfiber/utils/env/isBrowser', () => {
  it('Browser is unknown', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'AppleCoreMedia/1.0.0.21L5195h (Apple TV; U; CPU OS 17_4 like Mac OS X; en_us)',
    );
    expect(isBrowser('unknown')).toBeTruthy();
    expect(isBrowser('unknown', '')).toBeTruthy();
  });

  it('Browser is MiUi', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Xiaomi_MDT2_TD-LTE/V1 Linux/3.18.31 Android/7.1 Release/5.15.2017 Browser/AppleWebKit537.36 Mobile Safari/537.36 System/Android 7.1 XiaoMi/MiuiBrowser/8.7.7',
    );
    expect(isBrowser('miui')).toBeTruthy();
    expect(isBrowser('miui', '~8.7')).toBeTruthy();
  });

  it('Browser is Safari', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Mobile/15E148 Safari/604.1 (Ecosia ios@9.2.3.1367)',
    );
    expect(isBrowser('safari')).toBeTruthy();
    expect(isBrowser('safari', '~605')).toBeTruthy();
  });

  it('Browser is Opera', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36 OPR/64.0.3417.54',
    );
    expect(isBrowser('opera')).toBeTruthy();
    expect(isBrowser('opera', '64.0.3417.54')).toBeTruthy();
  });

  it('Browser is Chrome', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3560.184 Safari/537.36',
    );
    expect(isBrowser('chrome')).toBeTruthy();
    expect(isBrowser('chrome', '~71.0.3560.184')).toBeTruthy();
  });

  it('Browser is Firefox', () => {
    setUserAgent(// eslint-disable-next-line @stylistic/max-len
      'Mozilla/5.0 (Android 12; Mobile; rv:109.0) Gecko/114.0 Firefox/114.0',
    );
    expect(isBrowser('firefox')).toBeTruthy();
    expect(isBrowser('firefox', '>=114.0')).toBeTruthy();
  });
});
