// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isArray } from '../deps.ts'
import { ifElse } from '../src/ifElse.ts'
import { take } from '../src/take.ts'
import { String2Array } from '../src/types/index.ts'

/**
 * Infer the head types.
 *
 * @typeParam T - `string` or any `array`
 * @returns Head element of the `T`
 *
 * @example
 * ```ts
 * // String
 * Head<string> // string
 * Head<''> // ''
 * Head<'hello'> // 'h'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * Head<[] | never[] | readonly [] | readonly never[]> // undefined
 * Head<['hello', 'world']> // 'hello'
 * Head<string | number[]> // string | number
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link Last}
 *
 * @public
 */
type Head<T extends readonly unknown[] | string> = T extends ''
  ? ''
  : T extends string
  ? String2Array<T>[0]
  : T extends readonly never[] | []
  ? undefined
  : T extends readonly [infer U, ...infer _]
  ? U
  : T[0] | undefined

/**
 * Infer the head types.
 *
 * @typeParam T - `string` or any `array`
 * @returns Head element of the `T`
 *
 * @example
 * ```ts
 * // String
 * head<''> // ''
 * head<'hello'> // 'hello'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * head<[]> // undefined
 * head<['hello', 'world']> // 'hello'
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link Last}
 *
 * @public
 */
const head = <T extends readonly unknown[] | string>(val: T): Head<T> =>
  ifElse(
    isArray(val),
    () => val[0],
    () => take(1, val)
  ) as Head<T>

export { head }
export type { Head }
