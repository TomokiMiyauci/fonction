// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { slice } from '../deps.ts'

/**
 * @example
 * ```ts
 * InitString<string> // string
 * InitString<''> // ''
 * InitString<'a'> // ''
 * InitString<'ab'> // 'a'
 * InitString<'abcd'> // 'abc'
 * ```
 * @internal
 */
type InitString<T extends string> = T extends `${infer F}${infer R}`
  ? R extends ''
    ? ''
    : `${F}${InitString<R>}`
  : T extends ''
  ? ''
  : string

/**
 * Infer the init types.
 * @typeParam T - `string` or any `array`
 *
 * @example
 * ```ts
 * // String
 * Init<string> // string
 * Init<''> // ''
 * Init<'hello'> // 'hell'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * Init<[] | never[] | readonly [] | readonly never[]> // []
 * Init<['hello', 'world']> // 'hello'
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link First}
 *
 * @public
 */
type Init<T extends string | readonly unknown[]> = T extends string
  ? InitString<T>
  : T extends readonly never[] | []
  ? []
  : T extends readonly [...infer I, unknown]
  ? I
  : T

/**
 * Returns all but the init element of the given list or string.
 * @param val - string or any array object
 * @returns The result of `val.slice(0, -1)`
 *
 * @example
 * ```ts
 * // String
 * init('hello') // 'hell'
 * init('h') // ''
 * init('') // ''
 * ```
 *
 * @example
 * ```ts
 * init([1, 2, 3]) // [1, 2]
 * init(['hello', 'world']) // ['hello']
 * init(['hello']) // []
 * init([]) // []
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link tail}
 *
 * @public
 */
const init = <T extends string | readonly unknown[]>(val: T): Init<T> =>
  slice(0, -1, val) as Init<T>

export { init }
export type { Init }
