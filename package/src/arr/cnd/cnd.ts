import {
  BfError, isFunction, isObject, isRegExp, isString, same, equals, isArray,
} from '../../common';
import {hasOwn} from '../../obj';

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
export type MatchConditionObj = MatchConditionIs | MatchConditionOr | MatchConditionNot
  | MatchConditionEqual | MatchConditionOrEqual | MatchConditionNotEqual;

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

/**
 * Returns a function that checks if a value matches the conditions
 * @example
 * import {cnd} from '@bitfiber/utils/arr';
 *
 * const obj1 = {name: 'Alex'};
 * const obj2 = {name: 'Mary'};
 * const obj3 = {name: 'Jack'};
 * const arr = [obj1, obj2, obj3];
 * const strArr = ['Alex', 'Mary', 'Jack'];
 *
 * // Handler for comparison
 * arr.filter(cnd(obj => obj.name === 'Alex')); // [{name: 'Alex'}]
 *
 * // Strict value comparison
 * arr.filter(cnd({is: obj1})); // [{name: 'Alex'}]
 * arr.filter(cnd({is: {name: 'Alex'}})); // []
 * arr.filter(cnd({or: [obj1, obj2]})); // [{name: 'Alex'}, {name: 'Mary'}]
 * arr.filter(cnd({or: [{name: 'Alex'}, obj2]})); // [{name: 'Mary'}]
 * arr.filter(cnd({not: [obj1, obj2]})); // [{name: 'Jack'}]
 * arr.filter(cnd({not: [{name: 'Alex'}, obj2]})); // [{name: 'Alex'}, {name: 'Jack'}]
 *
 * // Value equivalence comparison
 * arr.filter(cnd({equal: obj1})); // [{name: 'Alex'}]
 * arr.filter(cnd({equal: {name: 'Alex'}})); // [{name: 'Alex'}]
 * arr.filter(cnd({orEqual: [obj1, obj2]})); // [{name: 'Alex'}, {name: 'Mary'}]
 * arr.filter(cnd({orEqual: [{name: 'Alex'}, obj2]})); // [{name: 'Alex'}, {name: 'Mary'}]
 * arr.filter(cnd({notEqual: [obj1, obj2]})); // [{name: 'Jack'}]
 * arr.filter(cnd({notEqual: [{name: 'Alex'}, obj2]})); // [{name: 'Jack'}]
 *
 * // String value RegExp comparison
 * strArr.filter(cnd({equal: /^Alex$/})); // ['Alex']
 * strArr.filter(cnd({orEqual: [/^Alex$/, /^Mary$/]})); // ['Alex', 'Mary']
 * strArr.filter(cnd({notEqual: [/^Alex$/, /^Mary$/]})); // ['Jack']
 *
 * // Strict comparison of field value in objects
 * arr.filter(cnd({name: {is: 'Alex'}})); // [{name: 'Alex'}]
 * arr.filter(cnd({name: {or: ['Alex', 'Mary']}})); // [{name: 'Alex'}, {name: 'Mary'}]
 * arr.filter(cnd({name: {not: ['Alex', 'Mary']}})); // [{name: 'Jack'}]
 *
 * // Comparison of field value equivalence in objects
 * arr.filter(cnd({name: {equal: 'Alex'}})); // [{name: 'Alex'}]
 * arr.filter(cnd({name: {orEqual: ['Alex', 'Mary']}})); // [{name: 'Alex'}, {name: 'Mary'}]
 * arr.filter(cnd({name: {notEqual: ['Alex', 'Mary']}})); // [{name: 'Jack'}]
 *
 * // Comparing string fields in objects using RegExp
 * arr.filter(cnd({name: /^Alex$/})); // [{name: 'Alex'}]
 * arr.filter(cnd({name: {equal: /^Alex$/}})); // [{name: 'Alex'}]
 * arr.filter(cnd({name: {orEqual: [/^Alex$/, /^Mary$/]}})); // [{name: 'Alex'}, {name: 'Mary'}]
 * arr.filter(cnd({name: {notEqual: [/^Alex$/, /^Mary$/]}})); // [{name: 'Jack'}]
 *
 * @param conditions
 */
export function cnd(conditions: MatchConditions): MatchConditionFn {
  if (isFunction(conditions)) {
    return conditions;
  } else if ('is' in conditions) {
    return value => same(conditions.is, value);
  } else if ('or' in conditions) {
    return value => (isArray(conditions.or)
      ? conditions.or.some(item => same(item, value))
      : cndErr());
  } else if ('not' in conditions) {
    return value => (isArray(conditions.not)
      ? !conditions.not.some(item => same(item, value))
      : cndErr());
  } else if ('equal' in conditions) {
    return value => fit(conditions.equal, value);
  } else if ('orEqual' in conditions) {
    return value => (isArray(conditions.orEqual)
      ? conditions.orEqual.some(item => fit(item, value))
      : cndErr());
  } else if ('notEqual' in conditions) {
    return value => (isArray(conditions.notEqual)
      ? !conditions.notEqual.some(item => fit(item, value))
      : cndErr());
  } else {
    return obj => {
      if (isObject(obj)) {
        for (const key in conditions) {
          if (hasOwn(conditions, key)) {
            const value = obj[key];
            const condition = conditions[key];

            if (isRegExp(condition)) {
              if (!fit(condition, value)) {
                return false;
              }
            } else if ('is' in condition) {
              if (!same(condition.is, value)) {
                return false;
              }
            } else if ('or' in condition) {
              if (!condition.or.some(item => same(item, value))) {
                return false;
              }
            } else if ('not' in condition) {
              if (condition.not.some(item => same(item, value))) {
                return false;
              }
            } else if ('equal' in condition) {
              if (!fit(condition.equal, value)) {
                return false;
              }
            } else if ('orEqual' in condition) {
              if (!condition.orEqual.some(item => fit(item, value))) {
                return false;
              }
            } else if ('notEqual' in condition) {
              if (condition.notEqual.some(item => fit(item, value))) {
                return false;
              }
            }
          }
        }

        return true;
      } else {
        return false;
      }
    };
  }
}

function fit(condition: any, value: any): boolean {
  return isRegExp(condition) ? isString(value) && condition.test(value) : equals(condition, value);
}

function cndErr(): never {
  throw new BfError(
    '"or", "not", "orEqual" and "notEqual" must be an array',
    {code: 'bf_utils_arr_cnd_1'},
  );
}
