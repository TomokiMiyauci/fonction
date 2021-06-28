// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isArray } from './isArray.ts'
import { length } from './length.ts'
import { take } from './take.ts'
import { String2Array } from './types/index.ts'

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
  ? String2Array<T> extends []
    ? string
    : String2Array<T>[0]
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
 * Head<string | number[]> // string | number | undefined
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
    () =>
      ifElse(
        length(val as T & any[]),
        () => take(1, val)[0] as Head<T>,
        undefined as Head<T>
      ),
    () => take(1, val) as Head<T>
  )
export { head }
export type { Head }
