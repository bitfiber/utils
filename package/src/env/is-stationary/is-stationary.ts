import {isDesktop, isTV} from '../';

/**
 * Returns true if the platform is desktop or TV, otherwise false
 */
export function isStationary(): boolean {
  return isTV() || isDesktop();
}
