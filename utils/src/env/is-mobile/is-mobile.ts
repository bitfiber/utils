import {getPlatform} from '../';

/**
 * Returns true if the platform is mobile, otherwise false
 */
export function isMobile(): boolean {
  const name = getPlatform();
  return name === 'mobile';
}
