# @bitfiber/utils

[![Release Notes](https://img.shields.io/github/release/bitfiber/utils)](https://github.com/bitfiber/utils/releases)
[![GitHub star chart](https://img.shields.io/github/stars/bitfiber/utils?style=social)](https://star-history.com/#bitfiber/utils)
[![GitHub fork](https://img.shields.io/github/forks/bitfiber/utils?style=social)](https://github.com/bitfiber/utils/fork)

The "@bitfiber/utils" library is a collection of versatile utility functions designed to streamline common tasks and
enhance the development experience in JavaScript. With a focus on simplicity and reusability, this library provides a
range of functions that cover various aspects of programming, making it a valuable resource for developers across
different projects and domains.

---

## Key Features

1. **Strict Typing:** The library leverages TypeScript to enforce strict typing, ensuring robust
   type checking at compile time. This reduces the likelihood of runtime errors and enhances code
   reliability. TypeScript's type inference capabilities also aid in writing cleaner and more
   maintainable code.

2. **Tree Shaking:** The library's modular design enables tree shaking, allowing developers to
   optimize bundle sizes by selectively importing only the necessary functionalities.
   This eliminates unused code, resulting in smaller and more efficient applications.

3. **Common Use Cases:**

* Common Functions: Additional general-purpose utilities for tasks such as type checking, and more.
* String Manipulation: Functions for capitalizing strings, converting case, and more.
* Working with Numbers: Functions for numerical operations, such as rounding, formatting, converting, and more.
* Array Operations: Helper functions for working with arrays, such as comparison, traversal, mapping, and more.
* Object Operations: Utilities for working with objects, including functions for merging objects, deep cloning,
  property access, and more.
* DOM Manipulation: Utilities for interacting with the Document Object Model (DOM), including functions for style
  manipulation, traversal, and more.
* Environment Handling: Functions for utilizing User Agent information for tailored content delivery and feature
  adaptation.

---

## Installation

```bash
# NPM
npm install @bitfiber/utils

# YARN
yarn add @bitfiber/utils
```

---

## Contributing

We welcome contributions from the community. Before contributing, please take the time to read
our [contributing guide](https://github.com/bitfiber/utils/blob/main/CONTRIBUTING.md) to familiarize yourself with our
contribution process.
This guide can help you understand our expectations and save you time in the long run.

---

## Support

Have questions, encountered problems, or want to request new features?
Feel free to start a [discussion in our community forum](https://github.com/bitfiber/utils/discussions).
Your feedback is valuable to us!

---

## Found an Issue or Bug?

If you've found a bug or issue, please report it using [GitHub Issues](https://github.com/bitfiber/utils/issues).
Your reports help us improve the project for everyone.

---

## Code of Conduct

This project adheres to the [Code of Conduct](https://github.com/bitfiber/utils/blob/main/CODE_OF_CONDUCT.md) to ensure
a welcoming and inclusive community for all participants.
By participating, you are expected to uphold this code.

---

## License

This project is released under the Apache 2.0 License.  
You can find the full text of the license in the [LICENSE](https://github.com/bitfiber/utils/blob/main/LICENSE.txt)
file.  
Copyright © 2023-2024 Oleksandr Zmanovskyi. All rights reserved.

---

## Table of Contents

### Common functions

* [`copy`](#copy)
* [`equals`](#equals)
* [`forEach`](#forEach)
* [`getUniqueNumId`](#getUniqueNumId)
* [`getUniqueStrId`](#getUniqueStrId)
* [`hasIterator`](#hasIterator)
* [`isNull`](#isNull)
* [`isUndefined`](#isUndefined)
* [`isDefined`](#isDefined)
* [`isNullish`](#isNullish)
* [`isNaN`](#isNaN)
* [`isString`](#isString)
* [`isNumber`](#isNumber)
* [`isBigInt`](#isBigInt)
* [`isBoolean`](#isBoolean)
* [`isSymbol`](#isSymbol)
* [`isFunction`](#isFunction)
* [`isObject`](#isObject)
* [`isArray`](#isArray)
* [`isSet`](#isSet)
* [`isMap`](#isMap)
* [`isDate`](#isDate)
* [`isRegExp`](#isRegExp)
* [`isFile`](#isFile)
* [`isBlob`](#isBlob)
* [`isFormData`](#isFormData)
* [`isArrayBuffer`](#isArrayBuffer)
* [`isDocument`](#isDocument)
* [`isWindow`](#isWindow)
* [`isPromise`](#isPromise)
* [`isObservable`](#isObservable)
* [`isTypedArray`](#isTypedArray)
* [`isUsualObject`](#isUsualObject)
* [`isEmpty`](#isEmpty)
* [`random`](#random)
* [`same`](#same)
* [`stub`](#stub)
* [`toFloat`](#toFloat)
* [`toInt`](#toInt)
* [`toSortedString`](#toSortedString)

### Functions for working with objects

* [`constant`](#constant)
* [`deepConstant`](#deepConstant)
* [`diffObj`](#diffObj)
* [`exclude`](#exclude)
* [`extend`](#extend)
* [`extendAll`](#extendAll)
* [`forEachObj`](#forEachObj)
* [`hasOwn`](#hasOwn)
* [`include`](#include)
* [`keys`](#keys)
* [`mapObj`](#mapObj)
* [`mapObjToArr`](#mapObjToArr)
* [`values`](#values)

### Functions for working with arrays

* [`at`](#at)
* [`cnd`](#cnd)
* [`diffArr`](#diffArr)
* [`fill`](#fill)
* [`forEachArr`](#forEachArr)
* [`indexBy`](#indexBy)
* [`pluck`](#pluck)
* [`within`](#within)

### Functions for working with strings

* [`toCamelCase`](#toCamelCase)
* [`toHash`](#toHash)
* [`withCapital`](#withCapital)

### Functions for working with numbers

* [`inRange`](#inRange)
* [`round`](#round)

### Functions for working with DOM

* [`closest`](#closest)
* [`getDocument`](#getDocument)
* [`setDocument`](#setDocument)
* [`downloadFile`](#downloadFile)
* [`forEachElements`](#forEachElements)
* [`forEachNodes`](#forEachNodes)
* [`getAllStyles`](#getAllStyles)
* [`getBody`](#getBody)
* [`getHtml`](#getHtml)
* [`getNonStaticParent`](#getNonStaticParent)
* [`getOffsetFromDoc`](#getOffsetFromDoc)
* [`getOffsetFromParent`](#getOffsetFromParent)
* [`getOffsetFromWin`](#getOffsetFromWin)
* [`getScrollWidth`](#getScrollWidth)
* [`getStyle`](#getStyle)
* [`getStyles`](#getStyles)
* [`getValidStyleName`](#getValidStyleName)
* [`getWindow`](#getWindow)
* [`hasName`](#hasName)
* [`isComment`](#isComment)
* [`isElement`](#isElement)
* [`isText`](#isText)
* [`setOffsetFromParent`](#setOffsetFromParent)
* [`setStyle`](#setStyle)
* [`setStyles`](#setStyles)

### Functions for working with environment

* [`getBrowser`](#getBrowser)
* [`getEngine`](#getEngine)
* [`getOS`](#getOS)
* [`getPlatform`](#getPlatform)
* [`isBrowser`](#isBrowser)
* [`isChromeLike`](#isChromeLike)
* [`isDesktop`](#isDesktop)
* [`isEngine`](#isEngine)
* [`isFirefoxLike`](#isFirefoxLike)
* [`isMobile`](#isMobile)
* [`isOS`](#isOS)
* [`isPortable`](#isPortable)
* [`isSafariLike`](#isSafariLike)
* [`isStationary`](#isStationary)
* [`isTablet`](#isTablet)
* [`isTV`](#isTV)
* [`matches`](#matches)
* [`matchesWithBrowsers`](#matchesWithBrowsers)
* [`matchesWithVersion`](#matchesWithVersion)
* [`getUserAgent`](#getUserAgent)
* [`setUserAgent`](#setUserAgent)

---

## Common functions

---

### `copy`

Creates a deep copy of a value of any type  
Objects, arrays, sets, maps etc. will be ignored if they have been visited to prevent looping  
`<T>`  
`@param value: T`  
`@returns T`

**Example:**

```ts
import {copy} from '@bitfiber/utils';

copy({foo: [{bar: 'str'}]}); // result: {foo: [{bar: 'str'}]}
```

---

### `equals`

Determines whether two values are equal.  
The comparison is performed to the full depth of nesting.  
Objects are equal if they have the same fields with equal values.  
Arrays and sets are equal if they have the same length and equal values in the same order.  
Maps are equal if they have the same keys with equal values.  
Objects, arrays, sets, maps etc. will be ignored if they have been visited to prevent looping  
`@param value1: any`  
`@param value2: any`  
`@param sortFn?: (a: any, b: any) => number): boolean` - if added, arrays and sets will be sorted before comparison  
`@returns boolean`

**Example:**

```ts
import {equals} from '@bitfiber/utils';

equals({foo: [{bar: 'str1'}]}, {foo: [{bar: 'str1'}]}); // true
equals({foo: [{bar: 'str1'}]}, {foo: [{bar: 'str2'}]}); // false
```

---

### `forEach`

Iterates through all the items of any iterable object and calls a handler for each item.  
If the handler returns INTERRUPT, the loop will be interrupted  
`@param obj: any` - any iterable object  
`@param handler: handler: (value: any, key: NumStr, obj: any) => any` - function called for each item  
`@param reverse?: boolean` - iterates in reverse order if true  
`@returns void`

**Example:**

```ts
import {forEach, INTERRUPT} from '@bitfiber/utils';

forEach(
  new Set([1, 2, 3]),
  (item, i) => console.log(item),
  true
); // 3 -> 2 -> 1

forEach(
  new Map([[1, 1], [2, 2], [3, 3]]),
  (item, i) => (item === 2 ? INTERRUPT : console.log(item))
); // 1
```

---

### `getUniqueNumId`

Returns a unique number identifier for the current session  
`@returns number`

**Example:**

```ts
import {getUniqueNumId} from '@bitfiber/utils';

getUniqueNumId(); // 11115
getUniqueNumId(); // 11116
```

---

### `getUniqueStrId`

Returns a unique string identifier for the current session  
`@returns string`

**Example:**

```ts
import {getUniqueStrId} from '@bitfiber/utils';

getUniqueStrId(); // '11115'
getUniqueStrId(); // '11116'
```

---

### `hasIterator`

Returns true if the value has an iterator, otherwise false  
`@param value: any`  
`@returns boolean`

**Example:**

```ts
import {hasIterator} from '@bitfiber/utils';

hasIterator([]); // true
hasIterator(true); // false
```

---

### `isNull`

Returns true if the value is null, otherwise false  
`@param value: any`  
`@returns value is null (boolean)`

**Example:**

```ts
import {isNull} from '@bitfiber/utils';

isNull(null); // true
isNull(7); // false
```

---

### `isUndefined`

Returns true if the value is undefined, otherwise false  
`@param value: any`  
`@returns value is undefined (boolean)`

**Example:**

```ts
import {isUndefined} from '@bitfiber/utils';

isUndefined(undefined); // true
isUndefined(7); // false
```

---

### `isDefined`

Returns true if the value is defined, otherwise false  
`@param value: any`  
`@returns boolean`

**Example:**

```ts
import {isDefined} from '@bitfiber/utils';

isDefined(null); // true
isDefined(undefined); // false
```

---

### `isNullish`

Returns true if the value is undefined or null, otherwise false  
`@param value: any`  
`@returns value is Nullish (boolean)`

**Example:**

```ts
import {isNullish} from '@bitfiber/utils';

isNullish(null); // true
isNullish(undefined); // true
isNullish(false); // false
```

---

### `isNaN`

Returns true if the value is NaN, otherwise false   
`@param value: any`  
`@returns value is NaN (boolean)`

**Example:**

```ts
import {isNaN} from '@bitfiber/utils';

isNaN(NaN); // true
isNaN(''); // false
```

---

### `isString`

Returns true if the value is a string, otherwise false  
`@param value: any`  
`@returns value is string (boolean)`

**Example:**

```ts
import {isString} from '@bitfiber/utils';

isString('str'); // true
isString(7); // false
```

---

### `isNumber`

Returns true if the value is a number, otherwise false  
`@param value: any`  
`@returns value is number (boolean)`

**Example:**

```ts
import {isNumber} from '@bitfiber/utils';

isNumber(7); // true
isNumber(true); // false
```

---

### `isBigInt`

Returns true if the value is a big integer, otherwise false  
`@param value: any`  
`@returns value is bigint (boolean)`

**Example:**

```ts
import {isBigInt} from '@bitfiber/utils';

isBigInt(7n); // true
isBigInt(true); // false
```

---

### `isBoolean`

Returns true if the value is a boolean, otherwise false  
`@param value: any`  
`@returns value is boolean (boolean)`

**Example:**

```ts
import {isBoolean} from '@bitfiber/utils';

isBoolean(false); // true
isBoolean('true'); // false
```

---

### `isSymbol`

Returns true if the value is a symbol, otherwise false  
`@param value: any`  
`@returns value is symbol (boolean)`

**Example:**

```ts
import {isSymbol} from '@bitfiber/utils';

isSymbol(new Symbol()); // true
isSymbol(new Date()); // false
```

---

### `isFunction`

Returns true if the value is a function, otherwise false  
`@param value: any`  
`@returns value is Fn (boolean)`

**Example:**

```ts
import {isFunction} from '@bitfiber/utils';

isFunction(() => {
}); // true
isFunction({}); // false
```

---

### `isObject`

Returns true if the value is an object, otherwise false  
`@param value: any`  
`@returns value is Obj (boolean)`

**Example:**

```ts
import {isObject} from '@bitfiber/utils';

isObject({}); // true
isObject(() => {
}); // false
```

---

### `isArray`

Returns true if the value is an array, otherwise false  
`@param value: any`  
`@returns value is Array<any> (boolean)`

**Example:**

```ts
import {isArray} from '@bitfiber/utils';

isArray([]); // true
isArray(7); // false
```

---

### `isSet`

Returns true if the value is a set, otherwise false  
`@param value: any`  
`@returns value is Set<any> (boolean)`

**Example:**

```ts
import {isSet} from '@bitfiber/utils';

isSet(new Set()); // true
isSet([]); // false
```

---

### `isMap`

Returns true if the value is a map, otherwise false  
`@param value: any`  
`@returns value is Map<any, any> (boolean)`

**Example:**

```ts
import {isMap} from '@bitfiber/utils';

isMap(new Map()); // true
isMap([]); // false
```

---

### `isDate`

Returns true if the value is a date, otherwise false  
`@param value: any`  
`@returns value is Date (boolean)`

**Example:**

```ts
import {isDate} from '@bitfiber/utils';

isDate(new Date()); // true
isDate('12.12.12'); // false
```

---

### `isRegExp`

Returns true if the value is a regular expression, otherwise false  
`@param value: any`  
`@returns value is RegExp (boolean)`

**Example:**

```ts
import {isRegExp} from '@bitfiber/utils';

isRegExp(/test/i); // true
isRegExp({}); // false
```

---

### `isFile`

Returns true if the value is a file, otherwise false  
`@param value: any`  
`@returns value is File (boolean)`

**Example:**

```ts
import {isFile} from '@bitfiber/utils';

isFile(new File()); // true
isFile({}); // false
```

---

### `isBlob`

Returns true if the value is a blob, otherwise false  
`@param value: any`  
`@returns value is Blob (boolean)`

**Example:**

```ts
import {isBlob} from '@bitfiber/utils';

isBlob(new Blob()); // true
isBlob(7); // false
```

---

### `isFormData`

Returns true if the value is form data, otherwise false  
`@param value: any`  
`@returns value is FormData (boolean)`

**Example:**

```ts
import {isFormData} from '@bitfiber/utils';

isFormData(new FormData()); // true
isFormData([]); // false
```

---

### `isArrayBuffer`

Returns true if the value is an array buffer, otherwise false  
`@param value: any`  
`@returns value is ArrayBuffer (boolean)`

**Example:**

```ts
import {isArrayBuffer} from '@bitfiber/utils';

isArrayBuffer(new ArrayBuffer()); // true
isArrayBuffer('str'); // false
```

---

### `isDocument`

Returns true if the value is a document, otherwise false  
`@param value: any`  
`@returns value is Document (boolean)`

**Example:**

```ts
import {isDocument} from '@bitfiber/utils';

isDocument(document); // true
isDocument(true); // false
```

---

### `isWindow`

Returns true if the value is a window, otherwise false  
`@param value: any`  
`@returns value is Window (boolean)`

**Example:**

```ts
import {isWindow} from '@bitfiber/utils';

isWindow(window); // true
isWindow(NaN); // false
```

---

### `isPromise`

Returns true if the value is a promise, otherwise false  
`@param value: any`  
`@returns value is Promise<any> (boolean)`

**Example:**

```ts
import {isPromise} from '@bitfiber/utils';

isPromise(new Promise()); // true
isPromise([]); // false
```

---

### `isObservable`

Returns true if the value is an observable, otherwise false  
`@param value: any`  
`@returns boolean`

**Example:**

```ts
import {isObservable} from '@bitfiber/utils';

isObservable(new Subject()); // true
isObservable(false); // false
```

---

### `isTypedArray`

Returns true if the value is a typed array, otherwise false  
`@param value: any`  
`@returns value is TypedArr (boolean)`

**Example:**

```ts
import {isTypedArray} from '@bitfiber/utils';

isTypedArray(new Int16Array()); // true
isTypedArray(new Float32Array()); // true
isTypedArray([]); // false
```

---

### `isUsualObject`

Returns true if the value is a usual object, otherwise false  
`@param value: any`  
`@returns value is Obj (boolean)`

**Example:**

```ts
import {isUsualObject} from '@bitfiber/utils';

isUsualObject({}); // true
isUsualObject(new Date()); // false
isUsualObject(new Map()); // false
isUsualObject([]); // false
```

---

### `isEmpty`

Returns true if the value is empty (null, undefined, NaN, Infinity, '', {}, [], Int32Array(), Set(), Map()),
otherwise false  
`@param value: any`  
`@returns boolean`

**Example:**

```ts
import {isEmpty} from '@bitfiber/utils';

isEmpty(undefined); // true
isEmpty(null); // true
isEmpty(''); // true
isEmpty(0); // false
isEmpty(false); // true
isEmpty({}); // true
isEmpty({field: 'value'}); // false
isEmpty([]); // true
isEmpty([1]); // false
isEmpty(new Map()); // true
isEmpty(new Map([[1, 1]])); // false
```

---

### `random`

Returns a random integer between 0 and number, not exceeding a certain number of digits  
`@param numberOfDigits?: number` - number of digits (default: 7, maximum: 15)  
`@returns number`

**Example:**

```ts
import {random} from '@bitfiber/utils';

random(); // 5332544
random(4); // 8465
```

---

### `same`

Determines whether two values are the same value  
`@param value1: any`  
`@param value2: any`  
`@returns boolean`

**Example:**

```ts
import {same} from '@bitfiber/utils';

same(9, 9); // true
same({a: 1}, {a: 1}); // false
```

---

### `stub`

Can replace any required function or callback, takes any arguments and returns anything

**Example:**

```ts
import {stub} from '@bitfiber/utils';

Promise.resolve().then(stub);
```

---

### `toFloat`

Converts a string to a float and replaces NaN and Infinity with 0  
`@param value: NumStr`  
`@returns number`

**Example:**

```ts
import {toFloat} from '@bitfiber/utils';

toFloat(5.56); // 5.56
toFloat('5.56'); // 5.56
toFloat('str'); // 0
```

---

### `toInt`

Converts a string to an integer and replaces NaN and Infinity with 0  
`@param value: NumStr`  
`@returns number`

**Example:**

```ts
import {toInt} from '@bitfiber/utils';

toInt(5); // 5
toInt('5'); // 5
toInt('str'); // 0
```

---

### `toSortedString`

Converts any value to a sorted string.  
Sorts arrays, maps and sets by value and sorts objects by field name before adding them to a string.  
Objects, arrays, sets, maps etc. will be ignored if they have been visited to prevent looping  
`@param value: any`  
`@returns string`

**Example:**

```ts
import {toSortedString} from '@bitfiber/utils';

toSortedString(5); // '5'
toSortedString('str'); // 'str'
toSortedString({
  test2: [22, 11],
  test1: {}
}); // '{test1:{},test2:[11,22]}'
```

---

## Functions for working with objects

---

### `constant`

Makes an object read-only  
`<T extends Obj>`  
`@param obj: T` - any object  
`@returns Readonly<T>`

**Example:**

```ts
import {constant} from '@bitfiber/utils/obj';

const readOnlyObj = constant({a: 1});
```

---

### `deepConstant`

Makes an object and its nested objects read-only  
`<T extends Obj>`  
`@param obj: T` - any object  
`@returns Readonly<T>`

**Example:**

```ts
import {deepConstant} from '@bitfiber/utils/obj';

const readOnlyObj = deepConstant({a: 1, b: {c: 2}});
```

---

### `diffObj`

Returns the difference between two objects  
`<T1 extends Obj, T2 extends Obj>`  
`@param obj1: T1` - any object 1  
`@param obj2: T2` - any object 2  
`@param sortFn?: (a: any, b: any) => number` - if added, arrays and sets will be sorted before comparison  
`@returns ObjDiff<T1 & T2>`

**Example:**

```ts
import {diffObj} from '@bitfiber/utils/obj';

const result = diffObj(
  {a: 1, b: 2, c: {d: 4}, e: {f: 5}, i: 7},
  {a: 1, b: 3, c: {d: 4}, e: {g: 5}, j: 8},
);

/*
result = {
  equal: {a: 1, c: {d: 4}},
  notEqual1: {b: 2, e: {f: 5}, i: 7},
  notEqual2: {b: 3, e: {g: 5}, j: 8},
  only1: {i: 7},
  only2: {j: 8},
  isEqual: false
}
*/
```

---

### `exclude`

Returns a new object with the fields of the passed object, excluding the specified set of fields  
`<T extends Obj, K extends keyof T>`  
`@param obj: T` - any object  
`@param ...fields: K[]` - set of fields to be excluded  
`@returns Omit<T, K>`

**Example:**

```ts
import {exclude} from '@bitfiber/utils/obj';

const obj = exclude({a: 1, b: 2}, 'b'); // {a: 1}
```

---

### `extend`

Copies all enumerable own properties from one or more source objects to a target object.  
It returns the modified target object  
`<T extends Obj, U extends Obj[]>`  
`@param target: T` - target object  
`@param ...sources: U` - source objects  
`@returns T & ValueIntersection<typeof sources>`

**Example:**

```ts
import {extend} from '@bitfiber/utils/obj';

const obj = extend({a: 1}, {b: 2}); // {a: 1, b: 2}
```

---

### `extendAll`

Copies all enumerable own properties from one or more source objects to a target object
and copies enumerable properties from nested source objects to nested target objects  
It returns the modified target object  
`<T extends Obj, U extends Obj[]>`  
`@param target: T` - target object  
`@param ...sources: U` - source objects  
`@returns T & ValueIntersection<typeof sources>`

**Example:**

```ts
import {extendAll} from '@bitfiber/utils/obj';

const obj = extendAll({a: 1}, {b: 2}); // {a: 1, b: 2}
```

---

### `forEachObj`

Iterates through all the fields of an object and calls a handler for each field  
If the handler returns INTERRUPT, the loop will be interrupted  
`<T extends Obj, K extends keyof T>`  
`@param obj: T` - any object  
`@param handler: (value: ValueUnion<T>, key: K, obj: T) => any` - function called for each field  
`@returns void`

**Example:**

```ts
import {INTERRUPT} from '@bitfiber/utils';
import {forEachObj} from '@bitfiber/utils/obj';

forEachObj(
  {a: 1, b: 2},
  (v, k) => console.log(v),
  true,
); // 2 -> 1

forEachObj(
  {a: 1, b: 2},
  (v, k) => (v === 2 ? INTERRUPT : console.log(v)),
); // 1
```

---

### `hasOwn`

Returns true if the object has the indicated property as its own property.  
If the property is inherited, or does not exist, the method returns false  
`@param obj: Obj` - any object  
`@param property: NumStrSym`  
`@returns boolean`

**Example:**

```ts
import {hasOwn} from '@bitfiber/utils/obj';

hasOwn({a: 1, b: 2}, 'a'); // true
hasOwn({a: 1, b: 2}, 'c'); // false
```

---

### `include`

Returns a new object with the specified set of fields  
`<T extends Obj, K extends keyof T>`  
`@param obj: T` - any object  
`@param ...fields: K[]` - set of fields to be included  
`@returns Pick<T, K>`

**Example:**

```ts
import {include} from '@bitfiber/utils/obj';

const obj = include({a: 1, b: 2}, 'b'); // {b: 2}
```

---

### `keys`

Returns an array of the object's own enumerable property names  
`<T extends Obj>`  
`@param obj: T` - any object  
`@returns (keyof T)[]`

**Example:**

```ts
import {keys} from '@bitfiber/utils/obj';

const arr = keys({a: 1, b: 2}, 'b'); // ['a', 'b']
```

---

### `mapObj`

Returns a new object, which has the mapped values of object fields  
`<T extends Obj, K extends keyof T, R>`  
`@param obj: T` - any object  
`@param handler: (value: ValueUnion<T>, key: K, obj: T) => R` - function called for each field  
`@returns Record<K, R>`

**Example:**

```ts
import {mapObj} from '@bitfiber/utils/obj';

const obj = mapObj({a: 1, b: 2}, (v, k) => k); // {a: 'a', b: 'b'}
```

---

### `mapObjToArr`

Returns an array, which has the mapped values of object fields  
`<T extends Obj, K extends keyof T, R>`  
`@param obj: T` - any object  
`@param handler: (value: ValueUnion<T>, key: K, obj: T) => R` - function called for each field  
`@returns R[]`

**Example:**

```ts
import {mapObjToArr} from '@bitfiber/utils/obj';

const arr = mapObjToArr(
  {a: 1, b: 2},
  (v, k) => [k, v],
); // [['a', 1], ['b', 2]]
```

---

### `values`

Returns an array of values for each object's own enumerable property  
`<T>`  
`@param obj: Obj<T>` - any object  
`@returns T[]`

**Example:**

```ts
import {values} from '@bitfiber/utils/obj';

const arr = values({a: 1, b: 2}); // [1, 2]
```

---

## Functions for working with arrays

---

### `at`

Returns the array item at index, or undefined if there is no index.  
For negative indexes, returns items from the end  
`<T>`  
`@param arr: T[]` - any array  
`@param index: number` - item index  
`@returns T | undefined`

**Example:**

```ts
import {at} from '@bitfiber/utils/arr';

at([1, 2, 3], 0); // 1
at([1, 2, 3], -1); // 3
```

---

### `cnd`

Returns a function that checks if a value matches the conditions  
`@param conditions: MatchConditions`  
`@returns MatchConditionFn`

**Example:**

```ts
import {cnd} from '@bitfiber/utils/arr';

const obj1 = {name: 'Alex'};
const obj2 = {name: 'Mary'};
const obj3 = {name: 'Jack'};
const arr = [obj1, obj2, obj3];
const strArr = ['Alex', 'Mary', 'Jack'];

// Handler for comparison
arr.filter(cnd(obj => obj.name === 'Alex')); // [{name: 'Alex'}]

// Strict value comparison
arr.filter(cnd({is: obj1})); // [{name: 'Alex'}]
arr.filter(cnd({is: {name: 'Alex'}})); // []
arr.filter(cnd({or: [obj1, obj2]})); // [{name: 'Alex'}, {name: 'Mary'}]
arr.filter(cnd({or: [{name: 'Alex'}, obj2]})); // [{name: 'Mary'}]
arr.filter(cnd({not: [obj1, obj2]})); // [{name: 'Jack'}]
arr.filter(cnd({not: [{name: 'Alex'}, obj2]})); // [{name: 'Alex'}, {name: 'Jack'}]

// Value equivalence comparison
arr.filter(cnd({equal: obj1})); // [{name: 'Alex'}]
arr.filter(cnd({equal: {name: 'Alex'}})); // [{name: 'Alex'}]
arr.filter(cnd({orEqual: [obj1, obj2]})); // [{name: 'Alex'}, {name: 'Mary'}]
arr.filter(cnd({orEqual: [{name: 'Alex'}, obj2]})); // [{name: 'Alex'}, {name: 'Mary'}]
arr.filter(cnd({notEqual: [obj1, obj2]})); // [{name: 'Jack'}]
arr.filter(cnd({notEqual: [{name: 'Alex'}, obj2]})); // [{name: 'Jack'}]

// String value RegExp comparison
strArr.filter(cnd({equal: /^Alex$/})); // ['Alex']
strArr.filter(cnd({orEqual: [/^Alex$/, /^Mary$/]})); // ['Alex', 'Mary']
strArr.filter(cnd({notEqual: [/^Alex$/, /^Mary$/]})); // ['Jack']

// Strict comparison of field value in objects
arr.filter(cnd({name: {is: 'Alex'}})); // [{name: 'Alex'}]
arr.filter(cnd({name: {or: ['Alex', 'Mary']}})); // [{name: 'Alex'}, {name: 'Mary'}]
arr.filter(cnd({name: {not: ['Alex', 'Mary']}})); // [{name: 'Jack'}]

// Comparison of field value equivalence in objects
arr.filter(cnd({name: {equal: 'Alex'}})); // [{name: 'Alex'}]
arr.filter(cnd({name: {orEqual: ['Alex', 'Mary']}})); // [{name: 'Alex'}, {name: 'Mary'}]
arr.filter(cnd({name: {notEqual: ['Alex', 'Mary']}})); // [{name: 'Jack'}]

// Comparing string fields in objects using RegExp
arr.filter(cnd({name: /^Alex$/})); // [{name: 'Alex'}]
arr.filter(cnd({name: {equal: /^Alex$/}})); // [{name: 'Alex'}]
arr.filter(cnd({name: {orEqual: [/^Alex$/, /^Mary$/]}})); // [{name: 'Alex'}, {name: 'Mary'}]
arr.filter(cnd({name: {notEqual: [/^Alex$/, /^Mary$/]}})); // [{name: 'Jack'}]
```

---

### `diffArr`

Returns the difference between two arrays  
Strict comparison of array items is applied  
The order doesn't matter  
`<T extends NumStr>`  
`@param arr1: T[]` - array 1  
`@param arr2: T[]` - array 2  
`@returns ArrDiff<T>`

**Example:**

```ts
import {diffArr} from '@bitfiber/utils/arr';

const result1 = diffArr([1, 2, 3], [3, 4, 1]);
/*
result1 = {
  only1: [2],
  only2: [4],
  equal: [1, 3],
  isEqual: false
}
*/

const result2 = diffArr([1, 2, 3], [3, 2, 1]);
/*
result2 = {
  only1: [],
  only2: [],
  equal: [1, 2, 3],
  isEqual: true
}
*/
```

---

### `fill`

Fills a new array with items that will be returned by the handler, which will be called a certain number of times  
`<T>`  
`@param quantity: number` - number of array items  
`@param handler: (offsetIndex: number, index: number) => T` - a function that should return a new array item  
`@param offset = 1` - offset for the index, which is passed to the handler  
`@returns T[]`

**Example:**

```ts
import {fill} from '@bitfiber/utils/arr';

fill(2, i => ({id: i})); // [{id: 1}, {id: 2}]
fill(2, i => ({id: i}), 5); // [{id: 6}, {id: 6}]
fill(5, (i, j) => j, 5); // [0, 1, 2, 3, 4]
```

---

### `forEachArr`

Iterates through all the items of an array and calls a handler for each item  
If the handler returns INTERRUPT, the loop will be interrupted  
`<T extends Arr, V extends ValueUnion<T>>`  
`@param arr: T` - an array or any typed array  
`@param handler: (value: V, index: number, arr: T) => any` - function called for each item  
`@param reverse?: boolean` - iterates in reverse order if true  
`@returns void`

**Example:**

```ts
import {forEachArr} from '@bitfiber/utils/arr';

forEachArr([1, 2, 3], (item, i) => console.log(item), true); // 3 -> 2 -> 1
forEachArr(new Int32Array([1, 2, 3]), (item, i) => (item === 2 ? INTERRUPT : console.log(item))); // 1
```

---

### `indexBy`

Returns an object indexed by the values from a specific field of each item or from a function that is executed on each
item  
`<T extends Obj>`  
`@param arr: T[]` - array of objects  
`@param fieldOrFn: string | ((item: T) => string)` - the name of the field from which the index value should be taken,
or the function that should return the index value  
`@returns Index<T>`

**Example:**

```ts
import {indexBy} from '@bitfiber/utils/arr';

const arr = [
  {id: '1', name: 'Alex'},
  {id: '2', name: 'Mary'},
];
indexBy(arr, 'name'); // {Alex: {id: '1', name: 'Alex'}, Mary: {id: '2', name: 'Mary'}}
```

---

### `pluck`

Returns an array with values, each of which corresponds to the value of a certain array item field  
`<T extends Obj, F extends keyof T>`  
`@param arr: T[]` - array of objects  
`@param fieldName: F` - name of the array item field from which the value is to be taken  
`@returns (T[F])[]`

**Example:**

```ts
import {pluck} from '@bitfiber/utils/arr';

const arr = [
  {id: '1', name: 'Alex'},
  {id: '2', name: 'Mary'}
];

pluck(arr, 'name'); // ['Alex', 'Mary']
```

---

### `within`

Returns an array item by index.  
If the index is greater than the array length, then the array item will be obtained like remainder of division the index
by the array length.  
For negative indexes, returns items from the end  
`<T>`  
`@param arr: T[]` - any array  
`@param index: number` - an array item index  
`@returns T | undefined`

**Example:**

```ts
import {within} from '@bitfiber/utils/arr';

within([1, 2, 3], 0); // 1
within([1, 2, 3], 3); // 1
within([1, 2, 3], -1); // 3
within([1, 2, 3], -4); // 3
```

---

## Functions for working with strings

---

### `toCamelCase`

Converts a given string into camelCase format.  
CamelCase is a convention where a multi-word identifier is formed by joining words together, each starting with a
capital letter except for the initial word.  
This function takes a string as input, which may be in various formats such as snake_case, kebab-case, or
space-separated words, and transforms it into camelCase.  
`@param str: string` - the input string that needs to be converted to camelCase  
`@param separators: string[]` - an array of any separators, default '-', '_', ' '  
`@returns string`

**Example:**

```ts
import {toCamelCase} from '@bitfiber/utils/str';

toCamelCase('convert_this_string'); // 'convertThisString'
toCamelCase('convert this string'); // 'convertThisString'
```

---

### `toHash`

Generates a hash value for a given input string for insecure purposes.  
Hash functions are commonly used to convert input data into a fixed-length string of characters, providing a unique
representation of the input  
`@param str: string` - The input string to be hashed  
`@returns string`

**Example:**

```ts
import {toHash} from '@bitfiber/utils/str';

toHash('any string'); // 'ph35534354'
```

---

### `withCapital`

Takes a string as input and returns a new string with the initial letter in uppercase, while preserving the rest of the
string  
`@param str: string` - The input string whose first letter needs to be capitalized  
`@returns string`

**Example:**

```ts
import {withCapital} from '@bitfiber/utils/str';

withCapital('any strinG'); // 'Any strinG'
```

---

## Functions for working with numbers

---

### `inRange`

Converts the numeric value to a new number according to the options  
`@param value: Nullish | number` - numeric value  
`@param options: InRangeOptions = {}` - options for converting the numeric value  
`@returns number | null`

**Example:**

```ts
import {inRange} from '@bitfiber/utils/num';

inRange(10, {min: 20}); // 20
inRange(100, {max: 50}); // 50
inRange(10.11, {precision: 0}); // 10
inRange(10.11, {precision: 1}); // 10.1
inRange(null, {required: true}); // 0
inRange(null, {min: 10}); // null
inRange(null, {min: 10, required: true}); // 10
inRange(30.555, {min: 10, max: 20.3, precision: 1, required: true}); // 20.3
```

---

### `round`

Rounds a numeric value to a number with a specified number of decimal places and replaces NaN and Infinity with 0  
`@param value: number` - numeric value  
`@param precision = 0` - number of decimal places, default 0  
`@returns number`

**Example:**

```ts
import {round} from '@bitfiber/utils/num';

round(NaN, 1); // 0
round(10.111, 1); // 10.1
round(-10.111, 1); // -10.1
```

---

## Functions for working with DOM

---

### `closest`

Returns the same element or the closest parent element matching the selectors, otherwise null  
`@param element: HTMLElement` - any HTML element  
`@param selectors: string | HTMLElement` - target HTML element or string of valid CSS selectors  
`@returns HTMLElement | null`

**Example:**

```ts
import {getDocument, closest} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
closest(element, '.any-perant-class'); // div.any-perant-class | null
```

---

### `getDocument`

Returns the document object representing the HTML document in the current environment  
`@returns Document`

**Example:**

```ts
import {getDocument} from '@bitfiber/utils/dom';

const doc = getDocument(); // document
```

---

### `setDocument`

If the global object is not a window, you can use this function to set up a stub document implementation  
`@param document: Document` - The document object representing the HTML document in the current environment  
`@returns void`

**Example:**

```ts
import {setDocument} from '@bitfiber/utils/dom';

// For Angular:
setDocument(inject(DOCUMENT));
```

---

### `downloadFile`

Creates an offer to download a file from URL in the browser.  
Returns a promise that returns a blob if the download is successful  
`@param url: string` - file URL  
`@param fetchOptions?: RequestInit` - fetch options  
`@returns Promise<Blob>`

**Example:**

```ts
import {downloadFile} from '@bitfiber/utils/dom';

downloadFile('https://example.com/file/name');
```

---

### `forEachElements`

Iterates through all child elements of the parent element to the full depth of the tree and calls a handler for each
element.  
If the handler returns INTERRUPT, the loop will be interrupted  
`@param parent: Element` - a parent element  
`@param handler: (child: Element, index: number, parent: Element) => any` - function called for each element  
`@returns void`

**Example:**

```ts
import {INTERRUPT} from '@bitfiber/utils';
import {getDocument, forEachElements} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
forEachElements(element, (child): any => {
  // Any actions with elements
  if (child.classList.contains('some-class')) {
    return INTERRUPT;
  }
});
```

---

### `forEachNodes`

Iterates through all child nodes of the parent node to the full depth of the tree and calls a handler for each node.    
If the handler returns INTERRUPT, the loop will be interrupted  
`@param parent: Node` - a parent node  
`@param handler: (child: Node, index: number, parent: Node) => any` - function called for each node (Text, Comment,
Element)  
`@returns void`

**Example:**

```ts
import {INTERRUPT} from '@bitfiber/utils';
import {getDocument, forEachNodes, isElement} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
forEachNodes(element, (child): any => {
  // Any actions with nodes
  if (isElement(child) && child.classList.contains('some-class')) {
    return INTERRUPT;
  }
});
```

---

### `getAllStyles`

Returns all computed styles of a given HTML element  
`@param element: HTMLElement` - any HTML element  
`@returns CSSStyleDeclaration`

**Example:**

```ts
import {getDocument, getAllStyles} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const styles = getAllStyles(element);
```

---

### `getBody`

Returns the <body> element of the current document  
`@returns HTMLElement`

**Example:**

```ts
import {getBody} from '@bitfiber/utils/dom';

const body = getBody();
```

---

### `getHtml`

Returns the <html> element that is the root element of the document  
`@returns HTMLElement`

**Example:**

```ts
import {getHtml} from '@bitfiber/utils/dom';

const html = getHtml();
```

---

### `getNonStaticParent`

Returns the closest non-static parent HTML element  
`@param element: HTMLElement`  
`@returns HTMLElement`

**Example:**

```ts
import {getNonStaticParent} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const closestNonStaticParent = getNonStaticParent(element);
```

---

### `getOffsetFromDoc`

Returns the offset relative to the document  
`@param element: Element` - any element  
`@returns Offset` - {top: number, bottom: number, left: number, right: number, width: number, height: number}

**Example:**

```ts
import {getOffsetFromDoc} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const offset = getOffsetFromDoc(element);
```

---

### `getOffsetFromParent`

Returns the offset relative to the closest non-static parent element.  
For fixed elements returns the offset relative to the global window  
`@param element: HTMLElement` - any HTML element  
`@returns Offset` - {top: number, bottom: number, left: number, right: number, width: number, height: number}

**Example:**

```ts
import {getOffsetFromParent} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const offset = getOffsetFromParent(element);
```

---

### `getOffsetFromWin`

Returns the offset relative to the global window  
`@param element: Element` - any element  
`@returns Offset` - {top: number, bottom: number, left: number, right: number, width: number, height: number}

**Example:**

```ts
import {getOffsetFromWin} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const offset = getOffsetFromWin(element);
```

---

### `getScrollWidth`

Returns width of vertical and horizontal scrollbars  
`@param element?: HTMLElement` - any HTML element, default the document's root element <html>  
`@returns {y: number; x: number}`

**Example:**

```ts
import {getScrollWidth} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const sw = getScrollWidth(element);
```

---

### `getStyle`

Returns certain computed style value of a given HTML element  
`@param element: HTMLElement` - any HTML element  
`@param styleName: string` - any style name  
`@returns string` - computed style value

**Example:**

```ts
import {getStyle} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const width = getStyle(element, 'width'); // 100px
```

---

### `getStyles`

Returns an object with the specified computed styles for a given HTML element  
`<A extends string[]>`  
`@param element: HTMLElement` - any HTML element  
`@param ...styleNames: A` - list of certain style names  
`@returns {[K in ValueUnion<A>]: string}` - an object with the specified computed styles

**Example:**

```ts
import {getStyles} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.getElementById('element-id');
const styles = getStyles(element, 'width', 'height'); // {width: 100px, height: 50px}
```

---

### `getValidStyleName`

Attempts to convert the name to a valid style name.  
Returns a valid style name or throws an exception if a valid name is not found  
`@param string` - any name  
`@returns string`

**Example:**

```ts
import {getValidStyleName} from '@bitfiber/utils/dom';

getValidStyleName('border-radius'); // borderRadius
getValidStyleName('float'); // cssFloat
```

---

### `getWindow`

Returns the global window object in the current environment  
`@returns Window & typeof globalThis`

**Example:**

```ts
import {getWindow} from '@bitfiber/utils/dom';

const win = getWindow();
```

---

### `hasName`

Determines if the name of the passed element matches a specific name  
`@param element: Element` - any HTML element  
`@param name: string` - any node name  
`@returns boolean`

**Example:**

```ts
import {hasName} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.createElement('div');
hasName(element, 'div'); // true
hasName(element, 'span'); // false
```

---

### `isComment`

Determines if the given node represents a comment  
`@param value: any` - any value  
`@returns value is Comment (boolean)`

**Example:**

```ts
import {isComment} from '@bitfiber/utils/dom';

const doc = getDocument();
const comment = doc.createComment('comment');
const element = doc.createElement('div');
isComment(comment); // true
isComment(element); // false
```

---

### `isElement`

Determines if the given node represents an element  
`@param value: any` - any value  
`@returns value is Element (boolean)`

**Example:**

```ts
import {isElement} from '@bitfiber/utils/dom';

const doc = getDocument();
const element = doc.createElement('div');
const comment = doc.createComment('comment');
isElement(element); // true
isElement(comment); // false
```

---

### `isText`

Determines if the given node represents a text node  
`@param value: any` - any value  
`@returns value is Text (boolean)`

**Example:**

```ts
import {isText} from '@bitfiber/utils/dom';

const doc = getDocument();
const text = doc.createTextNode('text');
const comment = doc.createComment('comment');
isText(text); // true
isText(comment); // false
```

---

### `setOffsetFromParent`

Sets the offset relative to the closest non-static parent element.  
For fixed elements sets the offset relative to the global window  
`@param element: HTMLElement` - any HTML element  
`@param offset: Partial<TopLeft>` - top and left position relative to the parent HTML element  
`@returns void`

**Example:**

```ts
import {setOffsetFromParent} from '@bitfiber/utils/dom';

const doc = getDocument();
const div = doc.createElement('div');
setOffsetFromParent(div, {top: 30, left: 40});
```

---

### `setStyle`

Sets a new value for a certain style for a given HTML element  
`@param element: HTMLElement` - any HTML element  
`@param styleName: string` - any style name  
`@param value: string` - new value for style  
`@returns string` - previous value for style

**Example:**

```ts
import {setStyle} from '@bitfiber/utils/dom';

const doc = getDocument();
const div = doc.createElement('div');
const prevStyle = setStyle(div, 'width', '200px'); // 100px
```

---

### `setStyles`

Sets new styles for a given HTML element  
`<T extends Index<string>>`  
`@param element: HTMLElement` - any HTML element  
`@param styles: T` - object containing new styles  
`@returns T` - object containing previous styles

**Example:**

```ts
import {setStyles} from '@bitfiber/utils/dom';

const doc = getDocument();
const div = doc.createElement('div');
const prevStyles = setStyles(
  div,
  {width: '200px', height: '10px'},
); // {width: '100px', height: '5px'}
```

---

## Functions for working with environment

---

### `getBrowser`

Returns information about the browser.  
Possible browser names: opera | operaCoast | operaTouch | samsung | mz | yandex | uc | maxthon | kmeleon
| wechat | qqLite | qq | edge | sailfish | webOS | tizen | miui | silk | phantomjs | slimerjs | qupzilla
| electron | whale | focus | swing | epiphany | puffin | sleipnir | vivaldi | seamonkey | playstation4
| playstation5 | googleSearch | firefox | chrome | android | safari | unknown | BotNames  
`@returns BrowserData`

**Example:**

```ts
import {getBrowser} from '@bitfiber/utils/env';

const browser = getBrowser(); // {name: 'chrome', version: '96.0.4664.110', major: '96'}
```

---

### `getEngine`

Returns information about the browser engine.
Possible engine names: blink (Chrome like) | webkit (Safari like) | gecko (Firefox like) | unknown | BotNames  
`@returns EngineData`

**Example:**

```ts
import {getEngine} from '@bitfiber/utils/env';

const engine = getEngine(); // {name: 'blink', version: '96.0.4664.110', major: '96'}
```

---

### `getOS`

Returns information about the OS
Possible OS names: xbox | windows | ios | macOS | webOS | tizen | appleTV | roku | chromeOS
| playstation4 | playstation5 | nintendoSwitch | likeAndroid | android | linux | unknown | BotNames  
`@returns OSData`

**Example:**

```ts
import {getOS} from '@bitfiber/utils/env';

const OS = getOS(); // {name: 'windows', version: '11.2', major: '11'}
```

---

### `getPlatform`

Returns the name of the platform  
`@returns tv | desktop | tablet | mobile | unknown | BotNames`

**Example:**

```ts
import {getPlatform} from '@bitfiber/utils/env';

const platform = getPlatform(); // desktop
```

---

### `isBrowser`

Returns true if the name matches the browser name and the version matches the browser version, otherwise false  
`@param name: BrowserNames` - one of the browser names:  
opera | operaCoast | operaTouch | samsung | mz | yandex | uc | maxthon | kmeleon
| wechat | qqLite | qq | edge | sailfish | webOS | tizen | miui | silk | phantomjs | slimerjs | qupzilla
| electron | whale | focus | swing | epiphany | puffin | sleipnir | vivaldi | seamonkey | playstation4
| playstation5 | googleSearch | firefox | chrome | android | safari | unknown | BotNames  
`@param version?: string` - string condition in the format: x.x...x | [~ >= > <= <]x.x...x  
`@returns tv | desktop | tablet | mobile | unknown`

**Example:**

```ts
import {isBrowser} from '@bitfiber/utils/env';

isBrowser('firefox');
isBrowser('chrome', '~90.1');
isBrowser('opera', '<=100.5');
```

---

### `isChromeLike`

Returns true if the browser uses the Blink engine like Chrome, false otherwise  
`@returns boolean`

**Example:**

```ts
import {isChromeLike} from '@bitfiber/utils/env';

isChromeLike();
```

---

### `isDesktop`

Returns true if the platform is desktop, otherwise false  
`@returns boolean`

**Example:**

```ts
import {isDesktop} from '@bitfiber/utils/env';

isDesktop();
```

---

### `isEngine`

Returns true if the name matches the engine name and the version matches the engine version, otherwise false  
`@param name: EngineNames` - one of the engine names:  
blink (Chrome like) | webkit (Safari like) | gecko (Firefox like) | unknown | BotNames  
`@param version?: string` - string condition in the format: x.x...x | [~ >= > <= <]x.x...x  
`@returns boolean`

**Example:**

```ts
import {isEngine} from '@bitfiber/utils/env';

isEngine('gecko');
isEngine('blink', '~90.1');
isEngine('webkit', '<=100.5');
```

---

### `isFirefoxLike`

Returns true if the browser uses the Gecko engine like FireFox, false otherwise  
`@returns boolean`

**Example:**

```ts
import {isFirefoxLike} from '@bitfiber/utils/env';

isFirefoxLike();
```

---

### `isMobile`

Returns true if the platform is mobile, otherwise false  
`@returns boolean`

**Example:**

```ts
import {isMobile} from '@bitfiber/utils/env';

isMobile();
```

---

### `isOS`

Returns true if the name matches the OS name and the version matches the OS version, otherwise false  
`@param name: OSNames` - one of the OS names:  
xbox | windows | ios | macOS | webOS | tizen | appleTV | roku | chromeOS
| playstation4 | playstation5 | nintendoSwitch | likeAndroid | android | linux | unknown | BotNames  
`@param version?: string` - string condition in the format: x.x...x | [~ >= > <= <]x.x...x  
`@returns boolean`

**Example:**

```ts
import {isOS} from '@bitfiber/utils/env';

isOS('windows');
isOS('macOS', '~15.5');
isOS('playstation4', '<=8.1');
```

---

### `isPortable`

Returns true if the platform is mobile or tablet, otherwise false  
`@returns boolean`

**Example:**

```ts
import {isPortable} from '@bitfiber/utils/env';

isPortable();
```

---

### `isSafariLike`

Returns true if the browser uses the WebKit engine like Safari, false otherwise  
`@returns boolean`

**Example:**

```ts
import {isSafariLike} from '@bitfiber/utils/env';

isSafariLike();
```

---

### `isStationary`

Returns true if the platform is desktop or TV, otherwise false  
`@returns boolean`

**Example:**

```ts
import {isStationary} from '@bitfiber/utils/env';

isStationary();
```

---

### `isTablet`

Returns true if the platform is tablet, otherwise false  
`@returns boolean`

**Example:**

```ts
import {isTablet} from '@bitfiber/utils/env';

isTablet();
```

---

### `isTV`

Returns true if the platform is TV, otherwise false  
`@returns boolean`

**Example:**

```ts
import {isTV} from '@bitfiber/utils/env';

isTV();
```

---

### `matches`

Checks if a current browser matches a specific set of conditions  
`@param condition: PlatformsCondition` - an object that has keys corresponding to platform names
and values corresponding to objects that have keys corresponding to OS names
and values corresponding to objects that have keys corresponding to browser names
and values corresponding to browser versions

```
{  
  [platformName | anyPlatform]: {  
    [osName | anyOS]: {
      osVersion?: versionCondition(x.x...x | [~ >= > <= <]x.x...x),
      browserName?: versionCondition(x.x...x | [~ >= > <= <]x.x...x),
      engines?: engineName | {
        engineName: versionCondition(x.x...x | [~ >= > <= <]x.x...x),
        ...
      }
      ...
    }
    ...
  }
  ...
}
```

`@returns boolean`

**Example:**

```ts
import {matches} from '@bitfiber/utils/env';

matches({anyPlatform: {anyOS: {chrome: ''}}});
matches({desktop: {windows: {chrome: '96.0.4664.110'}}});

matches({
  desktop: {
    windows: {
      osVersion: '~10', engines: 'blink'
    }
  }
});

matches({
  desktop: {
    anyOS: {
      engines: {
        blink: '>90.5', gecko: '<=100'
      }
    }
  }
});

matches({
  anyPlatform: {
    ios: {
      chrome: '~96.1', safari: '>80'
    }
  }
});
```

---

### `matchesWithBrowsers`

Checks if a current browser matches a specific set of browsers  
`@param condition: BrowsersCondition` - an object that has keys corresponding to browser names and values corresponding
to browser version conditions

```
{
  browserName?: versionCondition(x.x...x | [~ >= > <= <]x.x...x),
  engines?: engineName | {
    engineNane: versionCondition(x.x...x | [~ >= > <= <]x.x...x)
    ...
  }
  ...
}
```

`@returns boolean`

**Example:**

```ts
import {matchesWithBrowsers} from '@bitfiber/utils/env';

matchesWithBrowsers({firefox: '>=95.5', chrome: '~96.0.4664'});

matchesWithBrowsers({engines: 'gecko', firefox: '>100.1'});

matchesWithBrowsers({
  engines: {blink: '~96', gecko: '110.5.0'},
  firefox: '>100.1',
});
```

---

### `matchesWithVersion`

Checks if a specific version matches a version condition  
`@param version: string` - any browser or OS version, for example: x.x...x  
`@param condition: string` - version condition in the format: x.x...x | [~ >= > <= <]x.x...x  
`@returns boolean`

**Example:**

```ts
import {matchesWithVersion} from '@bitfiber/utils/env';

matchesWithVersion('96.0.4664.110', '~96'); // true
matchesWithVersion('96.0.4664.110', '>=95.5'); // true
matchesWithVersion('96.0.4664.110', '<95.10'); // false
```

---

### `getUserAgent`

Returns user agent  
`@returns string`

**Example:**

```ts
import {getUserAgent} from '@bitfiber/utils/env';

const agent = getUserAgent(); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ...
```

---

### `setUserAgent`

If the global object is not a window, you can use this function to set up a stub user agent  
`@param userAgent: string` - any string with user agent data  
`@returns void`

**Example:**

```ts
import {setUserAgent} from '@bitfiber/utils/env';

setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)');
```

---
