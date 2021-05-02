# API

## Functions

### add



Adds first argument and second argument.



**Signature:**

```ts
add: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
}
```

#### Example 1

```ts
// Basic
add(1, 2) // 3
```

#### Example 2

```ts
// Bigint
add(1n, 2n) // 3n
```

#### Example 3

```ts
// Curry
const plus2(2)
plus2(-3) // -1
```


### and



Returns true if both arguments are true; otherwise false.



**Signature:**

```ts
and: <T, U>(a: T, b: U) => T extends Falsy ? false : U extends Falsy ? false : boolean
```

#### Example 

```ts
and(true, true) // true
and(false, true) // false
and(true, false) // false
and(false, false) // false
```


### append



Returns a new list containing the contents of the given list, followed by the given value



**Signature:**

```ts
append: <T, U>(val: T, list: U[]) => (T | U)[]
```

#### Example 

```ts
append('Tom', ['hello']) // ['hello', 'Tom']
append('Tom', []) // ['Tom']
append(['Tom'], ['hello', 'world']) // ['hello', 'world', ['Tom']]
```


### chunk



Return an array of elements split into groups the length of size.



**Signature:**

```ts
chunk: <T extends number, U extends readonly unknown[]>(size: T, array: U) => T extends 0 ? U : `${T}` extends `-${number}` ? U : U extends readonly [
] ? U : U extends readonly (infer R)[] ? R[][] : never
```

#### Example 1

```ts
// Basic
chunk(1, ['a', 'b', 'c', 'd']) // [['a'], ['b'], ['c'], ['d']]
chunk(3, ['a', 'b', 'c', 'd']) // [['a', 'b', 'c'], ['d']]
chunk(5, ['a', 'b', 'c', 'd']) // [['a', 'b', 'c', 'd']]
```

#### Example 2

```ts
// Illegal size
chunk(0, ['a', 'b', 'c']) // ['a', 'b', 'c']
chunk(-3, ['a', 'b', 'c']) // ['a', 'b', 'c']
chunk(5, []) // []
```


### dec



Decrements its argument.



**Signature:**

```ts
dec: {
    (val: number): number;
    (val: bigint): bigint;
}
```

#### Example 

```ts
dec(100) // 99
dec(10n) // 9n
```


### defaultTo



Returns the second argument if it is not `null`, `undefined` or `NaN`; otherwise the first argument is returned.



**Signature:**

```ts
defaultTo: <T extends unknown>(a: T) => <U extends unknown>(b: U) => IsNill<U> extends true ? T : IsNumber<U> extends false ? U : T | U
```

#### Example 

```ts
const defaultVal = defaultTo('anonymous')
defaultVal(undefined) // 'anonymous'
defaultVal(null) // 'anonymous'
defaultVal(NaN) // 'anonymous'

defaultVal('Tom') // 'Tom'
```


### divide



Divide its second argument from its first argument.



**Signature:**

```ts
divide: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
} & {
    (a: typeof _, b: number): (a: number) => number;
    (a: typeof _, b: bigint): (a: bigint) => bigint;
}
```

#### Example 1

```ts
// Number
divide(10, 100) // 0.1
```

#### Example 2

```ts
// Bigint
divide(1n, 2n) // 3n
```

#### Example 3

```ts
// First argument curry
const reciprocal = divide(1)
reciprocal(4) // 0.25
```

#### Example 4

```ts
// Second argument curry
import { _ } from 'fonction'
const half = divide(_, 2)
half(20) // 10
```


### endsWith



Checks if a string ends with the provided substring.



**Signature:**

```ts
endsWith: <T extends string, U extends string | undefined = undefined>(val: T, target?: U | undefined) => StringWith<"endsWith", U>
```

#### Example 1

```ts
// Basic
endsWith('world', 'hello world') // true
endsWith('earth', 'hello world') // false
```

#### Example 2

```ts
// Curry
const endsWithHtml = endsWith('html')
endsWithHtml('index.html') // true
```


### F



A function that always returns `false`. Any passed in parameters are ignored.



**Signature:**

```ts
F: AnyFn<unknown, false>
```

#### Example 

```ts
F() // false
F(1, 'hello', 'world') // false
```


### first



Returns the first element of the given list or string.



**Signature:**

```ts
first: <T extends string | readonly unknown[]>(val: T) => First<T>
```

#### Example 1

```ts
// String
first('hello') // 'h'
```

#### Example 2

```ts
// Array
first('hello', 'new', 'world') // 'hello'
first([]) // undefined
first(['one', 2, 3, 4]) // 'one'
```


### gt



Returns `true` if the first argument is greater than the second; otherwise `false`



**Signature:**

```ts
gt: <T extends Ord>(a: T, b: T) => boolean
```

#### Example 1

```ts
// Number
gt(2, 1) // true
gt(2, 2) // false
```

#### Example 2

```ts
// Bigint
gt(2n, 1n) // true
gt(2n, 2n) // false
```

#### Example 3

```ts
// String
gt('z', 'a') // true
gt('a', 'z') // false
```

#### Example 4

```ts
// Boolean
gt(true, false) // true
gt(false, true) // false
gt(true, true) // false
gt(false, false) // false
```

#### Example 5

```ts
// Date
gt(new Date('2000/1/2'), new Date('2000/1/1')) // true
gt(new Date('1999/12/31'), new Date('2000/1/1')) // false
gt(new Date('2000/1/1'), new Date('2000/1/1')) // false
```


### gte



Returns `true` if the first argument is greater than or equal to the second; otherwise `false`



**Signature:**

```ts
gte: <T extends Ord>(a: T, b: T) => boolean
```

#### Example 1

```ts
// Number
gte(2, 1) // true
gte(2, 2) // true
gte(2, 3) // false
```

#### Example 2

```ts
// Bigint
gte(2n, 1n) // true
gte(2n, 2n) // true
gte(2n, 3n) // false
```

#### Example 3

```ts
// String
gte('z', 'a') // true
gte('a', 'a') // true
gte('a', 'z') // false
```

#### Example 4

```ts
// Boolean
gte(true, false) // true
gte(true, true) // true
gte(false, false) // true
gte(false, true) // false
```

#### Example 5

```ts
// Date
gte(new Date('2000/1/2'), new Date('2000/1/1')) // true
gte(new Date('2000/1/1'), new Date('2000/1/1')) // true
gte(new Date('1999/12/31'), new Date('2000/1/1')) // false
```


### has



Returns whether or not an object has an own property with the specified name.



**Signature:**

```ts
has: <T extends string | number | (string | number)[], U extends Record<PropertyKey, unknown>>(props: T, obj: U) => T extends unknown[] ? boolean : T extends string | number ? U extends Record<T, unknown> ? true : false : never
```

#### Example 1

```ts
// Flat
has('hello', { hello: 'world' }) // true
has(0, { 0 : 1}) // true
has('', {}) // false
has('hello', { hi : hello: 'world' }) // false
```

#### Example 2

```ts
// Nest
hasPath(['hello'], { hello: 'world' }) // true
hasPath([0], { 0: 1 }) // true
hasPath(['hello', 'world'], { hello: { world: '' } } // true

hasPath(['hi'], { hello: '' } ) // false
hasPath(['hi', 'Tom'], { hi: { John: 1 } } ) // false
```


### hasPath


<span class="tag deprecated">deprecate</span>

Returns whether or not a path exists in an object. Only the object's own properties are checked.

::: danger
This function will remove next major release.
:::


**Signature:**

```ts
hasPath: <T extends unknown>(path: (string | number)[], obj: Record<PropertyKey, T>) => boolean
```

#### Example 

```ts
hasPath(['hello'], { hello: 'world' }) // true
hasPath([0], { 0: 1 }) // true
hasPath(['hello', 'world'], { hello: { world: '' } } // true

hasPath(['hi'], { hello: '' } ) // false
hasPath(['hi', 'Tom'], { hi: { John: 1 } } ) // false
```


### head



Returns all but the last element of the given list or string.



**Signature:**

```ts
head: {
    (val: string): string;
    <T extends unknown[]>(val: T): T;
}
```

#### Example 1

```ts
// String
head('hello') // 'hell'
head('h') // ''
head('') // ''
```

#### Example 2

```ts
head([1, 2, 3]) // [1, 2]
head(['hello', 'world']) // ['hello']
head(['hello']) // []
head([]) // []
```


### identity



Return the parameter supplied to it.



**Signature:**

```ts
identity: <T>(val: T) => T
```

#### Example 

```ts
identity(1) // 1
identity({}) // {}
```


### inc



Increments its argument.



**Signature:**

```ts
inc: {
    (val: number): number;
    (val: bigint): bigint;
}
```

#### Example 

```ts
inc(100) // 101
inc(10n) // 11n
```


### isArray



Whatever argument is `Array` or not.



**Signature:**

```ts
isArray: (val: unknown) => val is any[]
```

#### Example 

```ts
isArray([]) // true
isArray(['hello', 'world']) // true
isArray({}) // false
```


### isBigint



Whatever argument is type of `bigint` or not.



**Signature:**

```ts
isBigint: (val: unknown) => val is bigint
```

#### Example 

```ts
isBigint(1n) // true
isBigint(1000) // false
```


### isBoolean



Whatever argument is type of `boolean` or not.



**Signature:**

```ts
isBoolean: (val: unknown) => val is boolean
```

#### Example 

```ts
isBoolean(true) // true
isBoolean('hello') // false
```


### isEmpty



Returns `true` if the given value is its type's empty value; otherwise `false`.



**Signature:**

```ts
isEmpty: (val: unknown) => val is Empty
```

#### Example 

```ts
isEmpty('') // true
isEmpty({}) // true
isEmpty([]) // true

isEmpty('hello world') // false
isEmpty(1000) // false
```


### isFunction



Whatever argument is type of `function` or not.



**Signature:**

```ts
isFunction: (val: unknown) => val is AnyFn<any, unknown>
```

#### Example 

```ts
isFunction(function) // true
isFunction('hello') // false
```


### isNaN



Whatever argument is `NaN` or not.



**Signature:**

```ts
isNaN: (val: unknown) => val is number
```

#### Example 

```ts
isNaN(NaN) // true
isNaN(100) // false
```


### isNill



Whatever argument is type of `undefined` or `null`.



**Signature:**

```ts
isNill: (val: unknown) => val is null | undefined
```

#### Example 

```ts
isNumber(0) // true
isNumber('hello') // false
```


### isNull



Whatever argument is type of `null` or not.



**Signature:**

```ts
isNull: (val: unknown) => val is null
```

#### Example 

```ts
isNull(null) // true
isNull(undefined) // false
```


### isNumber



Whatever argument is type of `number` or not.



**Signature:**

```ts
isNumber: (val: unknown) => val is number
```

#### Example 

```ts
isNumber(0) // true
isNumber('hello') // false
```


### isObject



Whatever argument is type of `object` or not.



**Signature:**

```ts
isObject: <T extends unknown>(val: T) => val is T
```

#### Example 

```ts
isObject([]) // true
isObject('hello') // false
```


### isPrimitive



Whatever argument is `primitive` or not.



**Signature:**

```ts
isPrimitive: (val: unknown) => val is Primitive
```

#### Example 

```ts
isPrimitive(true) // true
isPrimitive([]) // false
```


### isString



Whatever argument is type of `string` or not.



**Signature:**

```ts
isString: (val: unknown) => val is string
```

#### Example 

```ts
isString('hello world') // true
isString(1000) // false
```


### isSymbol



Whatever argument is type of `symbol` or not.



**Signature:**

```ts
isSymbol: (val: unknown) => val is symbol
```

#### Example 

```ts
isSymbol(Symbol('hello')) // true
isSymbol('hello') // false
```


### isUndefined



Whatever argument is type of `undefined` or not.



**Signature:**

```ts
isUndefined: (val: unknown) => val is undefined
```

#### Example 

```ts
isUndefined(undefined) // true
isUndefined('hello') // false
```


### K



K combinator. Returns a function that always returns the given value.



**Signature:**

```ts
K: <T extends unknown>(val: T) => () => T
```

#### Example 

```ts
const k = K('k')
k() // 'k'
```


### keys



Returns the names of the enumerable string properties and methods of an object.



**Signature:**

```ts
keys: <T extends PropertyKey>(val: Record<T, unknown>) => string[]
```

#### Example 

```ts
keys({}) // []
keys({ 'a': 'b' }) // ['a']
keys({ 0: 'hello', 1: 'world' }) // ['0', '1']
```


### last



Returns the last element of the given list or string.



**Signature:**

```ts
last: <T extends string | readonly unknown[]>(val: T) => Last<T>
```

#### Example 1

```ts
// String
last('hello') // 'o'
```

#### Example 2

```ts
// Array
last('hello', 'new', 'world') // 'world'
last([]) // undefined
last(['one', 2, 3, 4]) // 4
```


### length



Returns the number of elements in the array or string length.



**Signature:**

```ts
length: <T extends string | unknown[]>(val: T) => T["length"]
```

#### Example 

```ts
length('hello') // 5
length(['hello', 'world', 1]) // 3
```


### lowerCase



Return lowercase string



**Signature:**

```ts
lowerCase: <T extends string>(val: T) => Lowercase<T>
```

#### Example 

```ts
toLower('Hello') // hello
```


### lt



Returns `true` if the first argument is less than the second; otherwise `false`



**Signature:**

```ts
lt: <T extends Ord>(a: T, b: T) => boolean
```

#### Example 1

```ts
// Number
lt(1, 2) // true
lt(2, 2) // false
```

#### Example 2

```ts
// Bigint
lt(1n, 2n) // true
lt(2n, 2n) // false
```

#### Example 3

```ts
// String
lt('a', 'z') // true
lt('a', 'a') // false
```

#### Example 4

```ts
// Boolean
lt(false, true) // true
lt(true, true) // false
lt(false, false) // false
lt(true, false) // false
```

#### Example 5

```ts
// Date
lt(new Date('1999/12/31'), new Date('2000/1/1')) // true
lt(new Date('2000/1/1'), new Date('2000/1/1')) // false
lt(new Date('2000/1/2'), new Date('2000/1/1')) // false
```


### lte



Returns `true` if the first argument is less than or equal to the second; otherwise `false`



**Signature:**

```ts
lte: <T extends Ord>(a: T, b: T) => boolean
```

#### Example 1

```ts
// Number
lte(1, 2) // true
lte(2, 2) // true
lte(2, 1) // false
```

#### Example 2

```ts
// Bigint
lte(1n, 2n) // true
lte(2n, 2n) // true
lte(2n, 1n) // true
```

#### Example 3

```ts
// String
lte('a', 'z') // true
lte('a', 'a') // true
lte('z', 'a') // false
```

#### Example 4

```ts
// Boolean
lte(true, true) // true
lte(false, false) // true
lte(false, true) // true
lte(true, false) // false
```

#### Example 5

```ts
// Date
lte(new Date('2000/1/1'), new Date('2000/1/1')) // true
lte(new Date('1999/12/31'), new Date('2000/1/1')) // true
lte(new Date('2000/1/2'), new Date('2000/1/1')) // false
```


### multiply



Multiplies first argument and second argument.



**Signature:**

```ts
multiply: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
}
```

#### Example 1

```ts
// Basic
multiply(2, 3) // 6
```

#### Example 2

```ts
// Bigint
multiply(2n, 3n) // 6n
```

#### Example 3

```ts
// Curry
const double = multiply(2)
double(4) // 8
```


### not



Returns the `!` of its argument.



**Signature:**

```ts
not: <T>(val: T) => T extends Falsy ? true : boolean
```

#### Example 

```ts
not('') // true
not(false) // true
not(0) // true
not(NaN) // true
not(undefined) // true
not(null) // true

not({}) // false
```


### or



Returns true if one or both of its arguments are true; otherwise false.



**Signature:**

```ts
or: <T, U>(a: T, b: U) => T extends Falsy ? U extends Falsy ? false : boolean : boolean
```

#### Example 

```ts
or(true, true) // true
or(false, true) // true
or(true, false) // true
or(false, false) // false
```


### prepend



Returns a new list with the given value at the front, followed by the contents of the list.



**Signature:**

```ts
prepend: <T, U>(val: T, list: U[]) => (T | U)[]
```

#### Example 

```ts
prepend('Tom', ['hello']) // ['Tom', 'hello']
prepend('Tom', []) // ['Tom']
prepend(['Tom'], ['hello', 'world']) // [['Tom'], 'hello', 'world']
```


### product



Multiplies together all the elements of a list.



**Signature:**

```ts
product: {
    (val: [
    ]): 0;
    (val: number[]): number;
    (val: bigint[]): bigint;
}
```

#### Example 

```ts
product([1, 2, 3, 4, 5]) // 120
product([1n, 2n, 3n, 4n, 5n]) //120n
product([]) // 0
```


### props



Returns a function that when supplied an object returns the indicated property of that object, if it exists.



**Signature:**

```ts
props: <T extends string | number, U extends Record<PropertyKey, unknown>>(val: T, obj: U) => U extends Record<T, unknown> ? U[T] : undefined
```

#### Example 

```ts
props('x', { x: 'hello' }) // 'hello'
props(1, { 1: 100 }) // 100
props('x', {}) // undefined
```


### reverse



Returns a new list or string with the elements or characters in reverse order.



**Signature:**

```ts
reverse: {
    (val: string): string;
    (val: ""): "";
    <T extends [
    ]>(val: T): [
    ];
    <T extends unknown[]>(val: T): T;
}
```

#### Example 1

```ts
// String
reverse('hello') // 'olleh'
```

#### Example 2

```ts
// Any Array
reverse(['hello', 'new', 'world']) // ['world', 'new', 'hello']
reverse([0, {}, []]) // [[], {}, 0]
```


### startsWith



Checks if a string starts with the provided substring.



**Signature:**

```ts
startsWith: <T extends string, U extends string | undefined = undefined>(val: T, target?: U | undefined) => StringWith<"startsWith", U>
```

#### Example 1

```ts
// Basic
startsWith('hello', 'hello world') // true
startsWith('good', 'hello world') // false
```

#### Example 2

```ts
// Curry
const startWithSlash = startsWith('/')
startWithSlash('/path/to') // true
```


### subtract



Subtracts its second argument from its first argument.



**Signature:**

```ts
subtract: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
} & {
    (a: typeof _, b: number): (a: number) => number;
    (a: typeof _, b: bigint): (a: bigint) => bigint;
}
```

#### Example 1

```ts
// Number
subtract(2, 1) // 1
```

#### Example 2

```ts
// Bigint
subtract(3n, 2n) //1n
```

#### Example 3

```ts
// First argument curry
const from5Minus = subtract(5)
from5Minus(10) // -5
```

#### Example 4

```ts
// Second argument curry
import { _ } from 'fonction'
const minus5 = (_, 5)
minus5(20) // 15
```


### sum



Adds together all the elements of a list.



**Signature:**

```ts
sum: {
    (val: [
    ]): 0;
    (val: number[]): number;
    (val: bigint[]): bigint;
}
```

#### Example 

```ts
sum([1, 2, 3, 4, 5]) // 15
sum([1n, 2n, 3n, 4n, 5n]) // 15n
sum([]) // 0
```


### T



A function that always returns `true`. Any passed in parameters are ignored.



**Signature:**

```ts
T: AnyFn<unknown, true>
```

#### Example 

```ts
T() // true
T(1, 'hello', 'world') // true
```


### tail



Returns all but the first element of the given list or string.



**Signature:**

```ts
tail: {
    (val: string): string;
    <T extends unknown[]>(val: T): T;
}
```

#### Example 1

```ts
// String
tail('hello') // 'ello'
tail('h') // ''
tail('') // ''
```

#### Example 2

```ts
tail([1, 2, 3]) // [2, 3]
tail(['hello', 'world']) // ['world']
tail(['hello']) // []
tail([]) // []
```


### trim



Removes (strips) whitespace from both ends of the string.



**Signature:**

```ts
trim: <T extends string>(val: T) => Trim<T>
```

#### Example 

```ts
trim('   hello   ') // 'hello'
```


### upperCase



Return uppercase string



**Signature:**

```ts
upperCase: <T extends string>(val: T) => Uppercase<T>
```

#### Example 

```ts
toUpper('Hello') // HELLO
```


### values



Returns an array of values of the enumerable properties of an object.



**Signature:**

```ts
values: <T extends unknown>(val: Record<PropertyKey, T> | ArrayLike<T>) => T[]
```

#### Example 1

```ts
// Object
values({}) // []
values({ 'a': 'b' }) // ['b']
values({ 0: 'hello', 1: 'world' }) // ['hello', 'world']
```

#### Example 2

```ts
// Array
values([]) // []
values(['hello', 'world']) // ['hello', 'world']
```


### xor



Returns true if one of the arguments is truthy and the other is falsy; otherwise false.



**Signature:**

```ts
xor: <T, U>(a: T, b: U) => T extends Falsy ? U extends Falsy ? false : boolean : boolean
```

#### Example 

```ts
xor(true, false) // true
xor(false, true) // true
xor(true, true) // false
xor(false, false) // false
```



## Types

### AnyFn



Type of any function



**Signature:**

```ts
type AnyFn<T = any, U = unknown> = (...args: T[]) => U;
```


### Empty



Alias for Empty values



**Signature:**

```ts
type Empty = "" | [
] | {};
```


### Falsy



Alias for Falsy values



**Signature:**

```ts
type Falsy = false | "" | 0 | null | undefined;
```


### First



Infer the first types.



**Signature:**

```ts
type First<T extends readonly unknown[] | string> = T extends readonly never[] | [
] ? undefined : T[0];
```

#### Example 1

```ts
// String
First<string> // string
First<'hello'> // string
```

#### Example 2

```ts
// Array
First<[] | never[] | readonly [] | readonly never[]> // undefined
First<['hello', 'world']> // 'hello'
First<string | number[]> // string | number
```


### Last



Infer the last types.



**Signature:**

```ts
type Last<T extends string | readonly unknown[]> = T extends never[] | readonly never[] ? undefined : T extends unknown[] | readonly unknown[] ? [
    never,
    ...T
][T["length"]] : T extends string ? string : never;
```

#### Example 1

```ts
// String
Last<string> // string
Last<'hello'> // string
```

#### Example 2

```ts
// Array
Last<[] | never[] | readonly [] | readonly never[]> // undefined
Last<['hello', 'world']> // 'world'
Last<string | number[]> // string | number
```


### Ord



Abbreviation for Ordinal



**Signature:**

```ts
type Ord = string | number | bigint | boolean | Date;
```


### Primitive



Alias for Primitive values types



**Signature:**

```ts
type Primitive = string | number | bigint | boolean | symbol | undefined | null;
```


