/**
 * Represents supported bot names
 */
export type BotNames = 'googlebot' | 'bingbot' | 'yandexbot' | 'slurp' | 'unknown';

/**
 * Represents supported platform names
 */
export type PlatformNames = 'tv' | 'desktop' | 'tablet' | 'mobile' | BotNames;

/**
 * Represents supported OS names
 */
export type OSNames = 'xbox' | 'windows' | 'ios' | 'macOS' | 'webOS' | 'tizen' | 'appleTV' | 'roku' | 'chromeOS'
  | 'playstation4' | 'playstation5' | 'nintendoSwitch' | 'likeAndroid' | 'android' | 'linux' | BotNames;

/**
 * Represents supported engine names
 */
export type EngineNames = 'blink' | 'webkit' | 'gecko' | BotNames;

/**
 * Represents supported browser names
 */
export type BrowserNames = 'opera' | 'operaCoast' | 'operaTouch' | 'samsung' | 'mz' | 'yandex' | 'uc' | 'maxthon'
  | 'kmeleon' | 'wechat' | 'qqLite' | 'qq' | 'edge' | 'sailfish' | 'webOS' | 'tizen' | 'miui' | 'silk' | 'phantomjs'
  | 'slimerjs' | 'qupzilla' | 'electron' | 'whale' | 'focus' | 'swing' | 'epiphany' | 'puffin' | 'sleipnir' | 'vivaldi'
  | 'seamonkey' | 'playstation4' | 'playstation5' | 'googleSearch' | 'firefox' | 'chrome' | 'android' | 'safari'
  | BotNames;

/**
 * Represents a version data
 */
export interface VersionData {

  /**
   * Full version
   */
  version: string;

  /**
   * Major version (first number)
   */
  major: string;
}

/**
 * Represents the returned data by the getOS function
 */
export interface OSData extends VersionData {

  /**
   * Unique name of the OS
   */
  name: OSNames;
}

/**
 * Represents the returned data by the getEngine function
 */
export interface EngineData extends VersionData {

  /**
   * Unique name of the browser engine
   */
  name: EngineNames;
}

/**
 * Represents the returned data by the getBrowser function
 */
export interface BrowserData extends VersionData {

  /**
   * Unique name of the browser
   */
  name: BrowserNames;
}

/**
 * Represents an object that have keys corresponding to engine names and values corresponding to engine versions
 */
export type EnginesCondition = {[key in EngineNames]?: string};

/**
 * Represents an object that have keys corresponding to browser names and values corresponding to browser versions,
 * and may have an engine property with the engines condition
 */
export type BrowsersCondition = {[key in BrowserNames]?: string} & {engines?: EngineNames | EnginesCondition};

/**
 * Represents the browsers condition with an optional osVersion property
 */
export type OSBrowsersCondition = BrowsersCondition & {osVersion?: string};

/**
 * Represents an object that have keys corresponding to OS names and values corresponding to the OS browsers conditions
 */
export type OSCondition = {[key in OSNames]?: OSBrowsersCondition} & {anyOS?: OSBrowsersCondition};

/**
 * Represents an object that have keys corresponding to platform names and values corresponding to the OS conditions
 */
export type PlatformsCondition = {[key in PlatformNames]?: OSCondition} & {anyPlatform?: OSCondition};

/*
 * @private
 * Represents the returned data by the getBot function
 */
export interface BotData extends VersionData {

  /*
   * Unique name of the bot
   */
  name: BotNames;
}

/*
 * @private
 * Represents the returned data by the getEnvData function
 */
export interface EnvData extends VersionData {

  /*
   * Unique name of the platform, OS, browser or browser engine
   */
  name: PlatformNames | OSNames | EngineNames | BrowserNames;
}

/*
 * @private
 * Represents the test type to test for compliance
 */
export type EnvTest = string | RegExp | (() => boolean);

/*
 * @private
 * Represents a group of tests
 */
export type EnvTestGroup = EnvTest | EnvTest[];

/*
 * @private
 * Represents a set of tests and template for retrieving a version
 */
export type EnvCondition = string | [string, EnvTestGroup] | [string, EnvTestGroup, string | RegExp];
