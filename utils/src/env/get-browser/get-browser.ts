import {BrowserData, EnvCondition} from '../';
import {getBot, getEnvData} from '../private/private';

let browser: BrowserData | null = null;

const browserConditions: EnvCondition[] = [
  ['opera', '(?:opera|opr\\/|opios)'], ['operaCoast', 'coast\\/'], ['operaTouch', 'opt\\/'],
  ['samsung', 'SamsungBrowser'], ['mz', 'MZBrowser'], ['yandex', 'YaBrowser'], ['uc', 'UcBrowser'],
  ['maxthon', '(?:Maxthon|mxios)'], ['kmeleon', 'k-meleon'], ['wechat', 'MicroMessenger'], ['qqLite', 'qqBrowserLite'],
  ['qq', 'qqBrowser'], ['edge', 'edg(?:[ea/]|ios)'], ['sailfish', 'sailfish\\s?(?:browser)?'],
  ['webOS', 'w(?:eb)?[o0]sbrowser'], ['tizen', 'tizen\\s?(?:browser)?'], ['miui', 'MiuiBrowser'], 'silk', 'phantomjs',
  'slimerjs', 'qupzilla', 'electron', 'whale', 'focus', 'swing', 'epiphany', 'puffin', 'sleipnir', 'vivaldi',
  'seamonkey', ['playstation4', 'playstation 4'], ['playstation5', 'playstation 5'], ['googleSearch', 'GSA'],
  ['firefox', '(?:firefox|FxiOS)'], ['chrome', '(?:chrome|chromium|crios|crmo)'], 'android',
  ['safari', '(?:safari|AppleWebKit)'],
];

/**
 * Returns information about the browser.
 * Possible browser names: opera | operaCoast | operaTouch | samsung | mz | yandex | uc | maxthon | kmeleon
 * | wechat | qqLite | qq | edge | sailfish | webOS | tizen | miui | silk | phantomjs | slimerjs | qupzilla
 * | electron | whale | focus | swing | epiphany | puffin | sleipnir | vivaldi | seamonkey | playstation4
 * | playstation5 | googleSearch | firefox | chrome | android | safari | unknown | BotNames
 */
export function getBrowser(): BrowserData {
  const bot = getBot();
  browser ??= bot.name !== 'unknown' ? {...bot} : <BrowserData>getEnvData(browserConditions, true);
  return browser;
}

/*
 * @private
 * For internal use
 */
export function resetBrowser(): void {
  browser = null;
}
