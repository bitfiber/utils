import {getOS, PlatformNames} from '../';
import {EnvCondition} from '../types';
import {getBot, getEnvData} from '../private/private';

let platform: PlatformNames | null = null;

const platformConditions: EnvCondition[] = [
  [
    'tv', [
      () => ['tizen', 'webOS', 'appleTV', 'roku', 'xbox', 'playstation4', 'playstation5']
        .includes(getOS().name),
      '(?:smart|web|google|hbb)[\\s:_/-]?tv',
      'bravia',
    ],
  ],
  ['desktop', [() => ['macOS', 'chromeOS', 'windows', 'linux'].includes(getOS().name)]],
  ['tablet', [() => ['nintendoSwitch'].includes(getOS().name), 'ipad', 'silk', 'tablet']],
  ['mobile', ['iphone', 'android.*?mobi(?:le)?']],
  ['tablet', 'android'],
];

/**
 * Returns the name of the platform
 * @returns tv | desktop | tablet | mobile | unknown | BotNames
 */
export function getPlatform(): PlatformNames {
  const bot = getBot();
  platform ??= bot.name !== 'unknown'
    ? bot.name
    : <PlatformNames>getEnvData(platformConditions).name;
  return <PlatformNames>platform;
}

/*
 * @internal
 * For internal use
 */
export function resetPlatform(): void {
  platform = null;
}
