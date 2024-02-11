import {getPlatform} from '../';

/**
 * Returns true if the platform is tablet, otherwise false
 */
export function isTablet(): boolean {
  const name = getPlatform();
  return name === 'tablet';
}
