// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { entries as _entries } from './constants/index.ts'
/**
 * Returns an array of key/values of the enumerable properties of an object.
 *
 * @param val - `Object` that contains the properties and methods
 * @returns The result of `Object.entries(val)`
 *
 * @remarks
 * The order of the output array is not guaranteed to be consistent across different JS platforms.
 *
 * @example
 * ```ts
 * entries({ a: 'b' }) // [['a', 'b']]
 * entries(['a', 'b', 'c']) // [['0', 'a'], ['1', 'b'], ['2', 'c']]
 * entries({}) // []
 * entries([]) // []
 * ```
 *
 * @category `Object` `Array`
 *
 * @see Related to {@link keys} {@link values}
 *
 * @public
 */
const entries: {
  <T>(
    val:
      | {
          [key: string]: T
        }
      | ArrayLike<T>
  ): [string, T][]
  (val: Record<string, unknown>): [string, unknown][]
} = (val: any) => _entries(val)

export { entries }
