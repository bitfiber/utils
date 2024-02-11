/**
 * Represents response of the diffArr function
 */
export interface ArrDiff<T> {

  /**
   * Contains items that are only in array 1
   */
  only1: T[];

  /**
   * Contains items that are only in array 2
   */
  only2: T[];

  /**
   * Contains items that are in both arrays
   */
  equal: T[];

  /**
   * True if only1 and only2 are empty, otherwise false
   */
  isEqual: boolean;
}

/**
 * Represents a condition that is true if the function returns true
 * Used for the cnd function
 */
export type MatchConditionFn = (value: any) => boolean;

/**
 * Represents a condition that is true if the value is the same as the condition
 * Used for the cnd function
 */
export type MatchConditionIs = {is: any};

/**
 * Represents a condition that is true if the value is the same for at least one part of the condition
 * Used for the cnd function
 */
export type MatchConditionOr = {or: any[]};

/**
 * Represents a condition that is true if the value is not the same for each part of the condition
 * Used for the cnd function
 */
export type MatchConditionNot = {not: any[]};

/**
 * Represents a condition that is true if the value is equal to the condition
 * Used for the cnd function
 */
export type MatchConditionEqual = {equal: any};

/**
 * Represents a condition that is true if the value is equal to at least one part of the condition
 * Used for the cnd function
 */
export type MatchConditionOrEqual = {orEqual: any[]};

/**
 * Represents a condition that is true if the value is not equal to each part of the condition
 * Used for the cnd function
 */
export type MatchConditionNotEqual = {notEqual: any[]};

/**
 * Represents a group of all object condition types
 * Used for the cnd function
 */
export type MatchConditionObj = MatchConditionIs | MatchConditionOr | MatchConditionNot | MatchConditionEqual
  | MatchConditionOrEqual | MatchConditionNotEqual;

/**
 * Represents a condition that is true if the value of each field matches each field condition
 * Used for the cnd function
 */
export type MatchConditionsByFields = {
  [field: string]: MatchConditionObj | RegExp;
};

/**
 * Represents all condition types for the cnd function
 */
export type MatchConditions = MatchConditionFn | MatchConditionObj | MatchConditionsByFields;
