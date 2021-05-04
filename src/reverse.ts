// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isString } from './isString.ts'

/**
 * Returns a new list or string with the elements or characters in reverse order.
 *
 * @param val - list or string characters
 * @returns New list or string characters in reverse order
 *
 * @example
 * ```ts
 * // String
 * reverse('hello') // 'olleh'
 * ```
 *
 * @example
 * ```ts
 * // Any Array
 * reverse(['hello', 'new', 'world']) // ['world', 'new', 'hello']
 * reverse([0, {}, []]) // [[], {}, 0]
 * ```
 *
 * @public
 */
const reverse: {
  (val: string): string
  (val: ''): ''
  <T extends []>(val: T): []
  <T extends unknown[]>(val: T): T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: string): any =>
  isString(val) ? val.split('').reverse().join('') : [...val].reverse()

export { reverse }
