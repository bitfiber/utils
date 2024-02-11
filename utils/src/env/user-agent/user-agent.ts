import {resetBrowser, resetEngine, resetOS, resetPlatform} from '../';
import {resetBot} from '../private/private';

let agent = typeof navigator === 'object' ? navigator.userAgent : '';

/**
 * Returns user agent
 */
export function getUserAgent(): string {
  return agent;
}

/**
 * If the global object is not a window, you can use this function to set up a stub user agent
 * @param userAgent - any string with user agent data
 */
export function setUserAgent(userAgent: string): void {
  if (agent !== userAgent) {
    resetBot();
    resetOS();
    resetEngine();
    resetPlatform();
    resetBrowser();
    agent = userAgent;
  }
}
