// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { equal } from './equal.ts'
import { ifElse } from './ifElse.ts'

/**
 * Returns a new `Array` containing only one copy of each element in the original array. `equal` is used to determine equality.
 *
 * @param val - Input any `array`
 * @returns The list of unique items
 *
 * @example
 * ```ts
 * uniq([1, 2, 1, 1]) // [1, 2]
 * uniq([{}, {}, [], []]) // [{}, []]
 * uniq([[1, 2, 3], [1, 2, 3]]) // [[1, 2, 3]]
 * ```
 *
 * @category `Array`
 *
 * @see Related to {@link equal}
 *
 * @beta
 */
const uniq = <T extends unknown>(val: readonly T[]): T[] =>
  Array.from(new Set(val)).reduce((acc, cur) => {
    const result = acc.some((val) => equal(cur, val))
    return ifElse(result, acc, () => [...acc, cur])
  }, [] as T[])

export { uniq }
