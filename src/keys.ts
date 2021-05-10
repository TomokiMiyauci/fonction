// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { keys as _keys } from './constants/index.ts'
/**
 * Returns the names of the enumerable string properties and methods of an object.
 *
 * @param val - `Object` that contains the properties and methods
 * @returns The result of `Object.keys(val)`
 *
 * @remarks
 * The order of the output array is not guaranteed to be consistent across different JS platforms.
 *
 * @example
 * ```ts
 * keys({}) // []
 * keys({ 'a': 'b' }) // ['a']
 * keys({ 0: 'hello', 1: 'world' }) // ['0', '1']
 * ```
 *
 * @category `Object`
 *
 * @see Related to {@link values} {@link entries}
 *
 * @public
 */
const keys = <T extends PropertyKey>(val: Record<T, unknown>): string[] =>
  _keys(val)

export { keys }
