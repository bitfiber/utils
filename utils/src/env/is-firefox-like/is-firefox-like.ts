import {getEngine} from '../';

/**
 * Returns true if the browser uses the Gecko engine like FireFox, false otherwise
 */
export function isFirefoxLike(): boolean {
  const name = getEngine().name;
  return name === 'gecko';
}
