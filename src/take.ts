// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { ifElse } from './ifElse.ts'
import { lt } from './lt.ts'
import { slice } from './slice.ts'

/**
 * Return a slice of string or array with `n` elements taken from the beginning.
 *
 * @param howMany - The number of elements to take
 * @param val - `String` or `Array` to query
 * @returns The slice of array
 *
 * @example
 * ```ts
 * // String
 * take(3, 'hello') // 'hel'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * take(3, [1, 2, 3, 4]) // [1, 2, 3]
 * ```
 *
 * @category `String` `Array`
 *
 * @see Related to {@link slice} {@link takeLast}
 *
 * @beta
 */
const take = <T extends readonly unknown[] | string>(
  howMany: number,
  val: T
): T => ifElse(lt(howMany, 0), val.slice(howMany) as T, slice(0, howMany, val))

export { take }
