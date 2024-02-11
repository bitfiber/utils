import {EngineNames, getEngine, matchesWithVersion} from '../';

/**
 * Returns true if the name matches the engine name and the version matches the engine version, otherwise false
 * @param name - one of the engine names:
 * blink (Chrome like) | webkit (Safari like) | gecko (Firefox like) | unknown | BotNames
 * @param version - string condition in the format: x.x...x | [~ >= > <= <]x.x...x
 */
export function isEngine(name: EngineNames, version?: string): boolean {
  const engine = getEngine();
  return engine.name === name && (!version || matchesWithVersion(engine.version, version));
}
