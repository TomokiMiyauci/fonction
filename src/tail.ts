// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { slice } from './slice.ts'
/**
 * Returns all but the first element of the given list or string.
 *
 * @param val - string or any array object
 * @returns The result of `val.slice(1, Infinity)`
 *
 * @example
 * ```ts
 * // String
 * tail('hello') // 'ello'
 * tail('h') // ''
 * tail('') // ''
 * ```
 *
 * @example
 * ```ts
 * tail([1, 2, 3]) // [2, 3]
 * tail(['hello', 'world']) // ['world']
 * tail(['hello']) // []
 * tail([]) // []
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link head}
 *
 * @public
 */
const tail: {
  (val: string): string
  <T extends unknown[]>(val: T): T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: any) => slice(1, Infinity, val)

export { tail }
