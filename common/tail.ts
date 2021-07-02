// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { slice } from '../deps.ts'

/**
 * Infer the tail types.
 * @typeParam T - `string` or any `array`
 *
 * @example
 * ```ts
 * // String
 * Tail<string> // string
 * Tail<''> // ''
 * Tail<'hello'> // 'ello'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * Tail<[] | never[] | readonly [] | readonly never[]> // []
 * Tail<['hello', 'world']> // 'world'
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link Init}
 *
 * @beta
 */
type Tail<T extends string | readonly unknown[]> = T extends string
  ? T extends `${string}${infer R}`
    ? R
    : T extends ''
    ? ''
    : string
  : T extends readonly never[] | []
  ? []
  : T extends readonly [unknown, ...infer R]
  ? R
  : T
/**
 * Returns all but the first element of the given list or string.
 *
 * @param val - string or any array object
 * @returns The result of `val.slice(1, Infinity)`
 *
 * @example
 * ```ts
 * // String
 * tail('hello') // 'ello'
 * tail('h') // ''
 * tail('') // ''
 * ```
 *
 * @example
 * ```ts
 * tail([1, 2, 3]) // [2, 3]
 * tail(['hello', 'world']) // ['world']
 * tail(['hello']) // []
 * tail([]) // []
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link head}
 *
 * @public
 */
const tail = <T extends string | readonly unknown[]>(val: T): Tail<T> =>
  slice(1, Infinity, val) as Tail<T>

export { tail }
export type { Tail }
