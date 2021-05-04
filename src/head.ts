// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Returns all but the last element of the given list or string.
 *
 * @param val - string or any array object
 * @returns The result of `val.slice(0, -1)`
 *
 * @example
 * ```ts
 * // String
 * head('hello') // 'hell'
 * head('h') // ''
 * head('') // ''
 * ```
 *
 * @example
 * ```ts
 * head([1, 2, 3]) // [1, 2]
 * head(['hello', 'world']) // ['hello']
 * head(['hello']) // []
 * head([]) // []
 * ```
 *
 * @public
 */
const head: {
  (val: string): string
  <T extends unknown[]>(val: T): T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: any) => val.slice(0, -1)

export { head }
