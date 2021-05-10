// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isArray } from './isArray.ts'
import { length } from './length.ts'
import { slice } from './slice.ts'
import { String2Array } from './types/index.ts'
/**
 * Infer the first types.
 *
 * @typeParam T - `string` or any `array`
 * @returns First element of the `T`
 *
 * @example
 * ```ts
 * // String
 * First<string> // string
 * First<''> // ''
 * First<'hello'> // 'h'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * First<[] | never[] | readonly [] | readonly never[]> // undefined
 * First<['hello', 'world']> // 'hello'
 * First<string | number[]> // string | number
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link Last}
 *
 * @public
 */
type First<T extends readonly unknown[] | string> = T extends ''
  ? ''
  : T extends string
  ? String2Array<T> extends []
    ? string
    : String2Array<T>[0]
  : T extends readonly never[] | []
  ? undefined
  : T[0]

/**
 * Returns the first element of the given list or string.
 *
 * @param val - String or any array object
 * @returns The first element of the `val`
 *
 * @example
 * ```ts
 * // String
 * first('') // ''
 * first('hello') // 'h'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * first('hello', 'new', 'world') // 'hello'
 * first([]) // undefined
 * first(['one', 2, 3, 4]) // 'one'
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link last}
 *
 * @public
 */
const first = <T extends readonly unknown[] | string>(val: T): First<T> =>
  ifElse(
    isArray(val),
    ifElse(
      length(val as T & any[]),
      slice(0, 1, val)[0] as First<T>,
      undefined as First<T>
    ),
    slice(0, 1, val) as First<T>
  )

export { first }
export type { First }
