import {isMobile, isTablet} from '../';

/**
 * Returns true if the platform is mobile or tablet, otherwise false
 */
export function isPortable(): boolean {
  return isMobile() || isTablet();
}
