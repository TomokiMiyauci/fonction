// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Infer deep flatted array.
 *
 * @typeParam T - input any array
 * @returns Deep flatted array
 *
 * @example
 * ```ts
 * FlattenDeep<[]> // []
 * FlattenDeep<[[1, [2, [3, [4]], 5]]> // [1, 2, 3, 4, 5]
 * ```
 *
 * @public
 */
type FlattenDeep<T extends readonly unknown[]> = T extends readonly [
  infer A,
  ...infer Rest
]
  ? A extends readonly unknown[]
    ? [...FlattenDeep<A>, ...FlattenDeep<Rest>]
    : [A, ...FlattenDeep<Rest>]
  : [...T]
/**
 * Recursively flattens array.
 *
 * @param val - The `array` to flatten
 * @returns The result of `val.flat(Infinity)`
 *
 * @example
 * ```ts
 * flattenDeep([]) // []
 * flattenDeep([1, [2, [3, [4]], 5]]) // [1, 2, 3, 4, 5]
 * ```
 *
 * @public
 */
const flattenDeep = <T extends readonly unknown[]>(val: T): FlattenDeep<T> =>
  val.flat(Infinity) as FlattenDeep<T>

export { flattenDeep }
export type { FlattenDeep }
