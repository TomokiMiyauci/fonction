import { UNDEFINED } from '@/constants'

/**
 * Undefined or not
 *
 * @typeParam T - any value
 */
type IsUndefined<T extends unknown> = T extends undefined ? true : false

/**
 * Whatever argument is type of undefined or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'undefined'`
 *
 * @example
 * isUndefined(undefined) // true
 * isUndefined('hello') // false
 */
const isUndefined = <T extends unknown>(val: T): IsUndefined<T> =>
  (typeof val === UNDEFINED) as IsUndefined<T>

export { isUndefined }
export type { IsUndefined }
