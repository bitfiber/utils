import {getPlatform} from '../';

/**
 * Returns true if the platform is desktop, otherwise false
 */
export function isDesktop(): boolean {
  const name = getPlatform();
  return name === 'desktop';
}
