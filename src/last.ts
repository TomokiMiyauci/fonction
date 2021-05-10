// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isArray } from './isArray.ts'
import { length } from './length.ts'
import { String2Array } from './types/index.ts'
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
 * Last<string | number[]> // string | number
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link First}
 *
 * @public
 */
type Last<T extends string | readonly unknown[]> = T extends ''
  ? ''
  : T extends string
  ? String2Array<T> extends []
    ? string
    : [never, ...String2Array<T>][String2Array<T>['length']]
  : T extends never[] | readonly never[]
  ? undefined
  : T extends unknown[] | readonly unknown[]
  ? [never, ...T][T['length']]
  : T extends string
  ? string
  : never

/**
 * Returns the last element of the given list or string.
 *
 * @param val - `string` or any `array` object
 * @returns The last element of the `val`
 *
 * @example
 * ```ts
 * // String
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
    ifElse(
      length((val as unknown) as unknown[]),
      val.slice(-1)[0] as Last<T>,
      undefined as Last<T>
    ),
    (val as string).slice(-1) as Last<T>
  )

export { last }
export type { Last }
