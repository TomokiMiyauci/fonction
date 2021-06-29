// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { slice } from './slice.ts'
/**
 * Returns all but the last element of the given list or string.
 *
 * @param val - string or any array object
 * @returns The result of `val.slice(0, -1)`
 *
 * @example
 * ```ts
 * // String
 * init('hello') // 'hell'
 * init('h') // ''
 * init('') // ''
 * ```
 *
 * @example
 * ```ts
 * init([1, 2, 3]) // [1, 2]
 * init(['hello', 'world']) // ['hello']
 * init(['hello']) // []
 * init([]) // []
 * ```
 *
 * @category `Array` `String`
 *
 * @see Related to {@link tail}
 *
 * @public
 */
const init: {
  (val: string): string
  <T extends unknown[]>(val: T): T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: any) => slice(0, -1, val)

export { init }
