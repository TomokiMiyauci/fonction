// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapArray, mapArray as _mapArray } from './_/mapArray.ts'
import { MapObject, mapObject as _mapObject } from './_/mapObject.ts'
import { isArray } from './isArray.ts'
/**
 * Takes a function, applies the function to each, and returns a result of the same shape.
 *
 * @param fn - The function to be called on every element of the input list.
 * @param list - The list to be iterated over.
 * @returns The result of `list.map(fn)` or object applied function to value
 *
 * @example
 * ```ts
 * const triple = (val: number):number => val * 3
 * map(triple, [1, 2, 3]) // [3, 6, 9]
 * mapObject(triple, { tom: 1, john: 2, bob: 3 }) // { tom: 3, john: 6, bob: 9}
 * ```
 *
 * @category `Array` `Object`
 *
 * @beta
 */
const map: {
  <T extends readonly unknown[], U>(
    fn: (value: T[number], index: number, list: T) => U,
    list: T
  ): MapArray<U, T>
  <T extends { [k: string]: unknown }, U>(
    fn: (val: T[keyof T], prop: keyof T, list: T) => U,
    list: T
  ): MapObject<U, T>
} = (fn: any, list: any) =>
  isArray(list) ? _mapArray(fn, list) : (_mapObject(fn, list) as any)

export { map }
export type { MapArray, MapObject }
