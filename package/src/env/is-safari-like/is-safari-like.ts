import {getEngine} from '../';

/**
 * Returns true if the browser uses the WebKit engine like Safari, false otherwise
 */
export function isSafariLike(): boolean {
  const name = getEngine().name;
  return name === 'webkit';
}
