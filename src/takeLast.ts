// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { ifElse } from './ifElse.ts'
import { lte } from './lte.ts'
import { slice } from './slice.ts'

/**
 * Return a slice of string or array with `n` elements taken from the end.
 *
 * @param howMany - The number of elements to take
 * @param val - `String` or `Array` to query
 * @returns The slice of array
 *
 * @example
 * ```ts
 * // String
 * takeLast(3, 'hello') // 'llo'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * takeLast(3, [1, 2, 3, 4]) // [2, 3, 4]
 * ```
 *
 * @category `String` `Array`
 *
 * @see Related to {@link slice} {@link take}
 *
 * @public
 */
const takeLast = <T extends readonly unknown[] | string>(
  howMany: number,
  val: T
): T =>
  ifElse(
    lte(howMany, 0),
    () => slice(0, -howMany, val) as T,
    () => val.slice(-howMany) as T
  )

export { takeLast }
