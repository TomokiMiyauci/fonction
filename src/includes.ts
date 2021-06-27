// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { curry } from '../deps.ts'

/**
 * @internal
 */
const _includes = <T extends string | unknown[]>(
  collection: T,
  val: T[number]
): boolean => collection.includes(val as any)

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
 * @public
 */
const includes = curry(_includes)

export { _includes, includes }
