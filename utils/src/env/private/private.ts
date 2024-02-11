import {isArray, isFunction, isRegExp, isString, isUndefined} from '../../';
import {BotData, EnvCondition, EnvData, getUserAgent} from '../';

/*
 * Functions for internal use
 */

let bot: BotData | null = null;

const botConditions: EnvCondition[] = ['googlebot', 'bingbot', 'yandexbot', 'slurp'];

/*
 * @private
 * For internal use
 */
export function getBot(): BotData {
  return bot ??= <BotData>getEnvData(botConditions);
}

/*
 * @private
 * For internal use
 */
export function resetBot(): void {
  bot = null;
}

/*
 * @private
 * For internal use
 */
export function getEnvData(conditions: EnvCondition[], needVersion = false): EnvData {
  const agent = getUserAgent();
  const result: EnvData = {
    name: 'unknown',
    version: '',
    major: '',
  };

  for (const condition of conditions) {
    // eslint-disable-next-line prefer-const
    let [name, test, ver] = isString(condition) ? [condition] : condition;
    const tests = isArray(test) ? test : (isUndefined(test) ? [name] : [test]);

    if (needVersion) {
      ver = isUndefined(ver) ? getVerRegExp(isString(test) ? test : name) : (isString(ver) ? getVerRegExp(ver) : ver);
    }

    for (let test of tests) {
      if (isString(test)) {
        test = getTestRegExp(test);
      }
      if ((isFunction(test) && test()) || (isRegExp(test) && agent.search(test) > -1)) {
        result.name = <any>name;

        if (needVersion && isRegExp(ver)) {
          const matches = agent.match(ver);
          result.version = (matches && matches.length > 1 && matches[1]) || '';
          result.version = result.version.trim().replace(/[\s_-]+/g, '.');

          if (result.version) {
            result.major = result.version.split('.')[0];
            return result;
          }
        }

        return result;
      }
    }
  }

  return result;
}

function getTestRegExp(name: string): RegExp {
  return new RegExp(name, 'i');
}

function getVerRegExp(name: string): RegExp {
  return new RegExp(`${name}(?:[\\s:;/-]?ver(?:sion)?)?[\\s:/-]?(\\d+(?:[_.-]\\d+)*)`, 'i');
}
