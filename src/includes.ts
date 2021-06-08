// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { curry2 } from './_/curry2.ts'

/**
 * @internal
 */
const _includes: {
  <T extends unknown[]>(arr: T, val: T[number]): boolean
  (str: string, val: string): boolean
} = (collection: any, val: any): boolean => collection.includes(val)

/**
 * Checks if value is in collection.
 *
 * @param collection - The collection to inspect
 * @param val - The value to search for
 * @returns The result of `collection.includes(val)`
 *
 * @example
 * ```ts
 * includes('hello', 'lo') // true
 * includes([1, 2, 3], 3) // true
 * ```
 *
 * @category `String` `Array`
 *
 * @beta
 */
const includes = curry2(_includes)

export { _includes, includes }
