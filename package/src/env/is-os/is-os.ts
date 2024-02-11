import {getOS, matchesWithVersion, OSNames} from '../';

/**
 * Returns true if the name matches the OS name and the version matches the OS version, otherwise false
 * @param name - one of the OS names:
 * xbox | windows | ios | macOS | webOS | tizen | appleTV | roku | chromeOS
 * | playstation4 | playstation5 | nintendoSwitch | likeAndroid | android | linux | unknown | BotNames
 * @param version - string condition in the format: x.x...x | [~ >= > <= <]x.x...x
 */
export function isOS(name: OSNames, version?: string): boolean {
  const os = getOS();
  return os.name === name && (!version || matchesWithVersion(os.version, version));
}
