import {INTERRUPT} from '../../common';
import {exclude, forEachObj} from '../../obj';
import {getPlatform, isOS, matchesWithBrowsers, PlatformsCondition} from '../';

/**
 * Checks if a current browser matches a specific set of conditions
 *
 * Condition structure:
 * {
 *   [platformName | anyPlatform]: {
 *     [osName | anyOS]: {
 *       osVersion?: versionCondition(x.x...x | [~ >= > <= <]x.x...x),
 *       browserName?: versionCondition(x.x...x | [~ >= > <= <]x.x...x),
 *       engines?: engineName | {
 *         engineName: versionCondition(x.x...x | [~ >= > <= <]x.x...x)
 *         ...
 *       }
 *       ...
 *     }
 *     ...
 *   }
 *   ...
 * }
 *
 * @example
 * matches({anyPlatform: {anyOS: {chrome: ''}}});
 * matches({desktop: {windows: {chrome: '96.0.4664.110'}}});
 * matches({desktop: {windows: {osVersion: '~10', engines: 'blink'}}});
 * matches({desktop: {anyOS: {engines: {blink: '>90.5', gecko: '<=100'}}}});
 * matches({anyPlatform: {ios: {chrome: '~96.1', safari: '>80'}}});
 *
 * @param condition - an object that has keys corresponding to platform names
 * and values corresponding to objects that have keys corresponding to OS names
 * and values corresponding to objects that have keys corresponding to browser names
 * and values corresponding to browser versions
 */
export function matches(condition: PlatformsCondition): boolean {
  let result = false;

  forEachObj(condition, (oss, platform) => {
    if (oss && (platform === 'anyPlatform' || platform === getPlatform())) {
      forEachObj(oss, (browsers, osName) => {
        const osVersion = browsers?.osVersion;
        if (browsers && (osName === 'anyOS' || isOS(osName, osVersion))) {
          result = matchesWithBrowsers(exclude(browsers, 'osVersion'));
        }
        return result && INTERRUPT;
      });
    }

    return result && INTERRUPT;
  });

  return result;
}
