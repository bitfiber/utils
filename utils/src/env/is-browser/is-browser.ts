import {BrowserNames, getBrowser, matchesWithVersion} from '../';

/**
 * Returns true if the name matches the browser name and the version matches the browser version, otherwise false
 * @param name - one of the browser names:
 * opera | operaCoast | operaTouch | samsung | mz | yandex | uc | maxthon | kmeleon
 * | wechat | qqLite | qq | edge | sailfish | webOS | tizen | miui | silk | phantomjs | slimerjs | qupzilla
 * | electron | whale | focus | swing | epiphany | puffin | sleipnir | vivaldi | seamonkey | playstation4
 * | playstation5 | googleSearch | firefox | chrome | android | safari | unknown | BotNames
 * @param version - string condition in the format: x.x...x | [~ >= > <= <]x.x...x
 */
export function isBrowser(name: BrowserNames, version?: string): boolean {
  const browser = getBrowser();
  return browser.name === name && (!version || matchesWithVersion(browser.version, version));
}
