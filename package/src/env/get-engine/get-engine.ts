import {EngineData, EnvCondition} from '../';
import {getBot, getEnvData} from '../private/private';

let engine: EngineData | null = null;

const engineConditions: EnvCondition[] = [
  ['gecko', 'firefox'], ['blink', 'chrome'], ['webkit', '(?:safari|AppleWebKit)'],
];

/**
 * Returns information about the browser engine.
 * Possible engine names: blink (Chrome like) | webkit (Safari like) | gecko (Firefox like) | unknown | BotNames
 */
export function getEngine(): EngineData {
  const bot = getBot();
  engine ??= bot.name !== 'unknown' ? {...bot} : <EngineData>getEnvData(engineConditions, true);
  return engine;
}

/*
 * @private
 * For internal use
 */
export function resetEngine(): void {
  engine = null;
}
