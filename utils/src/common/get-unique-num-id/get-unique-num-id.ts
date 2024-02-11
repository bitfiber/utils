import {getUniqueStrId} from '../';

/**
 * Returns a unique number identifier for the current session
 */
export function getUniqueNumId(): number {
  return Number(getUniqueStrId());
}
