import {getPlatform} from '../';

/**
 * Returns true if the platform is TV, otherwise false
 */
export function isTV(): boolean {
  const name = getPlatform();
  return name === 'tv';
}
