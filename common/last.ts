// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isArray } from '../deps.ts'
import { ifElse } from '../src/ifElse.ts'
import { takeLast } from '../src/takeLast.ts'

/**
 * @example
 * ```ts
 * LastString<''> // ''
 * LastString<'a'> // 'a'
 * LastString<'abcdefghijk'> // 'k'
 * ```
 *
 * @internal
 */
type LastString<T extends string> = T extends `${infer L}${infer R}`
  ? R extends ''
    ? L
    : LastString<R>
  : T extends ''
  ? ''
  : string

/**
 * Infer the last types.
 *
 * @typeParam T - `string` or any `array`
 *
 * @example
 * ```ts
 * // String
 * Last<string> // string
 * Last<''> // ''
 * Last<'hello'> // 'o'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * Last<[] | never[] | readonly [] | readonly never[]> // undefined
 * Last<['hello', 'world']> // 'world'
 * Last<string | number[]> // string | number | undefined
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link First}
 *
 * @public
 */
type Last<T extends string | readonly unknown[]> = T extends string
  ? LastString<T>
  : T extends readonly [...infer _, infer L]
  ? L
  : T[T['length']] | undefined

/**
 * Returns the last element of the given list or string.
 *
 * @param val - `string` or any `array` object
 * @returns The last element of the `val`
 *
 * @remarks
 * The maximum number of characters for the type system to work properly is 24.
 *
 * @example
 * ```ts
 * // String
 * last('') // ''
 * last('hello') // 'o'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * last('hello', 'new', 'world') // 'world'
 * last([]) // undefined
 * last(['one', 2, 3, 4]) // 4
 * ```
 *
 * @see Related to {@link first}
 *
 * @public
 */
const last = <T extends string | readonly unknown[]>(val: T): Last<T> =>
  ifElse(
    isArray(val),
    () => takeLast(1, val)[0],
    () => takeLast(1, val)
  ) as Last<T>

export { last }
export type { Last }
