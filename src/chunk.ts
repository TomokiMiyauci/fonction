// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { add } from './add.ts'
import { ifElse } from './ifElse.ts'
import { lte } from './lte.ts'
import { slice } from './slice.ts'
/**
 * Return an array of elements split into groups the length of size.
 *
 * @param size - The length of each chunk
 * @param array - The array to process
 * @returns Returns the new array of chunks
 *
 * @remarks
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @example
 * ```ts
 * // Basic
 * chunk(1, ['a', 'b', 'c', 'd']) // [['a'], ['b'], ['c'], ['d']]
 * chunk(3, ['a', 'b', 'c', 'd']) // [['a', 'b', 'c'], ['d']]
 * chunk(5, ['a', 'b', 'c', 'd']) // [['a', 'b', 'c', 'd']]
 * ```
 *
 * @example
 * ```ts
 * // Illegal size
 * chunk(0, ['a', 'b', 'c']) // ['a', 'b', 'c']
 * chunk(-3, ['a', 'b', 'c']) // ['a', 'b', 'c']
 * chunk(5, []) // []
 * ```
 *
 * @category `Array`
 *
 * @public
 */
const chunk = <T extends number, U extends readonly unknown[]>(
  size: T,
  array: U
): T extends 0
  ? U
  : `${T}` extends `-${number}`
  ? U
  : U extends readonly []
  ? U
  : U extends readonly (infer R)[]
  ? R[][]
  : never =>
  ifElse(
    lte(size, 0 as T),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    array as any,
    () =>
      array.reduce(
        (acc, _, index) =>
          ifElse(index % size, acc, [
            ...(acc as never),
            slice(index, add(index, size), array)
          ]),
        []
      )
  )

export { chunk }
