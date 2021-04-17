import { isString } from './isString'

/**
 * Returns a new list or string with the elements or characters in reverse order.
 *
 * @beta
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
