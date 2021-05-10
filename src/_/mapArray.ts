// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

/**
 * Infer `Array.map` types
 *
 * @typeParam T - Return types of function
 * @typeParam U - Input any array
 * @returns Mapped array types
 *
 * @example
 * ```ts
 * MapArray<void, any[]> // undefined[]
 * MapArray<1, any[]> // 1[]
 * MapArray<1, []> // []
 * ```
 *
 * @category `Array`
 *
 * @internal
 */
type MapArray<T, U> = U extends readonly [] | readonly never[]
  ? []
  : T extends void
  ? undefined[]
  : T[]

/**
 * Takes a function, applies the function to each, and returns a result of the same shape.
 *
 * @param fn - The function to be called on every element of the input array.
 * @param array - The array to be iterated over
 * @returns The result of `array.map(fn)`
 *
 * @example
 * ```ts
 * const triple = (val: number):number => val * 3
 * mapArray(triple, [1, 2, 3]) // [3, 6, 9]
 * ```
 *
 * @category `Array`
 *
 * @internal
 */
const mapArray = <T extends readonly unknown[], U>(
  fn: (value: T[number], index: number, array: T) => U,
  array: T
): MapArray<U, T> => array.map(fn as never) as MapArray<U, T>

export { mapArray }
export type { MapArray }
