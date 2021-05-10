// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { entries } from '../entries.ts'
/**
 * Infer object applied return value to value
 *
 * @typeParam T - Return types of function
 * @typeParam U - Input any object
 * @returns The result of `{[k in keyof U]: T extends void ? undefined : T }`
 *
 * @example
 * ```ts
 * MapObject<void, {}> // {}
 * MapObject<void, { '': '' }> // { '': undefined }
 * MapObject<number, { hoge: 'huga', 1: 2 }> // { hoge: number, 1: number }
 * ```
 *
 * @category `Object`
 *
 * @internal
 */
type MapObject<T, U extends { [k: string]: unknown }> = {
  [k in keyof U]: T extends void ? undefined : T
}

/**
 * Takes a function, applies the function to each, and returns a result of the same shape.
 *
 * @param fn - The function to be called on every element of the input object.
 * @param obj - The object to be iterated over
 * @returns The result of object applied function to value
 *
 * @example
 * ```ts
 * const triple = (val: number):number => val * 3
 * mapObject(triple, { tom: 1, john: 2, bob: 3 }) // { tom: 3, john: 6, bob: 9}
 * ```
 *
 * @category `Object`
 *
 * @internal
 */
const mapObject = <T extends { [k: string]: unknown }, U>(
  fn: (val: T[keyof T], prop: keyof T, obj: T) => U,
  obj: T
): MapObject<U, T> =>
  entries(obj).reduce((acc, [key, val]) => {
    acc[key] = fn(val as T[keyof T], key, obj)
    return acc
  }, {} as { [k: string]: unknown }) as MapObject<U, T>

export { mapObject }
export type { MapObject }
