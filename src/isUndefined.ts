/**
 * Undefined or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsUndefined<T extends unknown> = T extends undefined ? true : false

/**
 * Whatever argument is type of `undefined` or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'undefined'`
 *
 * @example
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined('hello') // false
 * ```
 *
 * @public
 */
const isUndefined = (val: unknown): val is undefined =>
  typeof val === 'undefined'

export { isUndefined }
export type { IsUndefined }
