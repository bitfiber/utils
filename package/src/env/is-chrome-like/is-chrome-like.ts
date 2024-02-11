import {getEngine} from '../';

/**
 * Returns true if the browser uses the Blink engine like Chrome, false otherwise
 */
export function isChromeLike(): boolean {
  const name = getEngine().name;
  return name === 'blink';
}
