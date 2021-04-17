import { NULL } from '@/constants'

/**
 * Null or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsNull<T extends unknown> = T extends null ? true : false

/**
 * Whatever argument is type of null or not.
 *
 * @param val - input any value
 * @returns The result of `val === null`
 *
 * @example
 * ```ts
 * isNull(null) // true
 * isNull(undefined) // false
 * ```
 *
 * @public
 */
const isNull = (val: unknown): val is null => val === NULL

export { isNull }
export type { IsNull }
