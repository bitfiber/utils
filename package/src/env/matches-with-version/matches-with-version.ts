import {INTERRUPT} from '../../common';
import {forEachArr} from '../../arr';

/**
 * Checks if a specific version matches a version condition
 * @param version - any browser or OS version, for example: x.x...x
 * @param condition - version condition in the format: x.x...x | [~ >= > <= <]x.x...x
 */
export function matchesWithVersion(version: string, condition: string): boolean {
  let result = 0;
  const versionParts = version.split('.');
  const conditionParts = condition.split('.');
  const matches = conditionParts[0].match(/^([~><=]*)(\d+)$/i);
  const operator = matches && matches.length ? matches[1] : '';
  conditionParts[0] = matches && matches.length ? matches[2] : '0';

  forEachArr(conditionParts, (part: string, index: number) => {
    const a = Number(versionParts[index]);
    const b = Number(part);

    switch (operator) {
      case '~':
        result = a === b ? 1 : -1;
        return result !== -1 || INTERRUPT;
      case '>':
        result = a === b ? 0 : (a > b ? 1 : -1);
        return result === 0 || INTERRUPT;
      case '>=':
        result = a === b || a > b ? 1 : -1;
        return (result !== -1 && !(a > b)) || INTERRUPT;
      case '<':
        result = a === b ? 0 : (a < b ? 1 : -1);
        return result === 0 || INTERRUPT;
      case '<=':
        result = a === b || a < b ? 1 : -1;
        return (result !== -1 && !(a < b)) || INTERRUPT;
      default:
        result = a === b && versionParts.length === conditionParts.length ? 1 : -1;
        return result !== -1 || INTERRUPT;
    }
  });

  return result === 1;
}
