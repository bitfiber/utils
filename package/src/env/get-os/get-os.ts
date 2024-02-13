import {OSData} from '../';
import {EnvCondition} from '../types';
import {getBot, getEnvData} from '../private/private';

let os: OSData | null = null;

const osConditions: EnvCondition[] = [
  'xbox', ['windows', 'Windows (?:NT|XP)'], ['ios', '(?:iphone|ipad|FxiOS)', 'OS'], ['macOS', 'Macintosh', 'Mac OS X'],
  ['webOS', '(?:web|hpw)[o0]s'], 'tizen', ['appleTV', 'apple[\\s_-]?TV', 'OS'], ['roku', 'Roku[\\w]{0,8}/DVP'],
  ['chromeOS', 'CrOS(?: x86_64)?'], ['playstation4', 'PlayStation 4'], ['playstation5', 'PlayStation 5'],
  ['nintendoSwitch', 'Nintendo Switch'], ['likeAndroid', 'like android'], 'android', ['linux', 'linux', 'rv:'],
];

/**
 * Returns information about the OS
 * Possible OS names: xbox | windows | ios | macOS | webOS | tizen | appleTV | roku | chromeOS
 * | playstation4 | playstation5 | nintendoSwitch | likeAndroid | android | linux | unknown | BotNames
 */
export function getOS(): OSData {
  const bot = getBot();
  os ??= bot.name !== 'unknown' ? {...bot} : <OSData>getEnvData(osConditions, true);
  return os;
}

/*
 * @internal
 * For internal use
 */
export function resetOS(): void {
  os = null;
}
