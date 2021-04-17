import { add } from '@/add'
import { InferArray } from '@/types'

/**
 * Adds together all the elements of a list.
 *
 * @beta
 *
 * @param val - list An array of numbers
 * @returns The sum of all the numbers in the list
 *
 * @example
 * ```ts
 * sum([1, 2, 3, 4, 5]) // 15
 * ```
 */
const sum = <T extends number[]>(val: T): InferArray<T> =>
  val.reduce((acc, cur) => add(acc, cur), 0) as InferArray<T>

export { sum }
