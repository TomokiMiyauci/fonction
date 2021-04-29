import { add } from './add.ts'
import { lte } from './lte.ts'

/**
 * Return an array of elements split into groups the length of size.
 *
 * @param size - The length of each chunk
 * @param array - The array to process
 * @returns - Returns the new array of chunks
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
 * @beta
 */
const chunk = <T extends number, U extends unknown[]>(
  size: T,
  array: U
): T extends 0
  ? U
  : `${T}` extends `-${number}`
  ? U
  : U extends never[]
  ? U
  : U extends (infer R)[]
  ? R[][]
  : never =>
  lte(size, 0 as T)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (array as any)
    : array.reduce(
        (acc, _, index) =>
          index % size
            ? acc
            : [...(acc as never), array.slice(index, add(index, size))],
        []
      )

export { chunk }
