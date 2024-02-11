import {INTERRUPT, isObject, isString} from '../../';
import {forEachObj} from '../../obj';
import {BrowsersCondition, getEngine, isBrowser, isEngine} from '../';

/**
 * Checks if a current browser matches a specific set of browsers
 *
 * Condition structure:
 * {
 *   browserName?: versionCondition(x.x...x | [~ >= > <= <]x.x...x),
 *   engines?: engineName | {
 *     engineNane: versionCondition(x.x...x | [~ >= > <= <]x.x...x)
 *     ...
 *   }
 *   ...
 * }
 *
 * @example
 * matchesWithBrowsers({firefox: '>=95.5', chrome: '~96.0.4664'});
 * matchesWithBrowsers({engines: 'gecko', firefox: '>100.1'});
 * matchesWithBrowsers({engines: {blink: '~96', gecko: '110.5.0'}, firefox: '>100.1'});
 *
 * @param condition - an object that has keys corresponding to browser names
 * and values corresponding to browser version conditions
 */
export function matchesWithBrowsers(condition: BrowsersCondition): boolean {
  let result = false;

  forEachObj(condition, (enginesOrVer, browser) => {
    if (browser === 'engines') {
      const {name} = getEngine();
      const engines = enginesOrVer;

      if (isObject(engines)) {
        forEachObj(engines, (version, engine) => {
          if (isEngine(engine, version)) {
            result = true;
          }
          return result && INTERRUPT;
        });
      } else if (isString(engines) && engines === name) {
        result = true;
      }
    } else {
      const version = <string>enginesOrVer;
      if (isBrowser(browser, version)) {
        result = true;
      }
    }

    return result && INTERRUPT;
  });

  return result;
}
