import { UNDEFINED } from '@/constants'

/**
 * Undefined or not
 *
 * @public
 *
 * @typeParam T - any value
 */
type IsUndefined<T extends unknown> = T extends undefined ? true : false

/**
 * Whatever argument is type of undefined or not.
 *
 * @public
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'undefined'`
 *
 * @example
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined('hello') // false
 * ```
 */
const isUndefined = (val: unknown): val is undefined => typeof val === UNDEFINED

export { isUndefined }
export type { IsUndefined }