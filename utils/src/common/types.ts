/**
 * Represents a value, which can be undefined or null
 */
export type Nullish = undefined | null;

/**
 * Represents a value, which can be a number or string
 */
export type NumStr = number | string;

/**
 * Represents a value, which can be a number, string or symbol
 */
export type NumStrSym = NumStr | symbol;

/**
 * Represents any function
 */
export type Fn = (...args: any[]) => any;

/**
 * Represents any array
 */
export type Arr<T = any> = ReadonlyArray<T> | ArrayLike<T>;

/**
 * Represents all typed array types
 */
export type TypedArr = Int8Array | Int16Array | Int32Array | Float32Array | Float64Array | Uint8Array
  | Uint8ClampedArray | Uint16Array | Uint32Array | BigInt64Array | BigUint64Array;

/**
 * Represents any object
 */
export interface Obj<T = any> {
  [key: NumStrSym]: T;
}

/**
 * Represents an object with an indefinite number of string keys of type T
 */
export interface Index<T = any> {
  [key: string]: T;
}

/**
 * Represents the union of any array type and any object type
 */
export type ArrObj<T = any> = Arr<T> | Obj<T>;

/**
 * Converts a type union to a type intersection
 */
export type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends ((x: infer I) => void) ? I
  : never;

/**
 * Represents the union of object value types or array value types
 */
export type ValueUnion<T extends ArrObj, K extends keyof T = keyof T> = T extends ReadonlyArray<any> ? T[number]
  : T extends ArrayLike<any> ? T[number] : T extends object ? T[K] : never;

/**
 * Represents the intersection of object value types or array value types
 */
export type ValueIntersection<T extends ArrObj> = UnionToIntersection<ValueUnion<T>>;

/**
 * Represents additional error options the BfError class
 */
export interface BfErrorOptions {
  code?: string;
  data?: any;
}

/**
 * This symbol is used in forEach handlers to interrupt the loop
 */
export const INTERRUPT = Symbol('Symbol.INTERRUPT');
