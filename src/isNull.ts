import { NULL } from '@/constants'

/**
 * Null or not
 *
 * @typeParam T - any value
 */
type IsNull<T extends unknown> = T extends null ? true : false

/**
 * Whatever argument is type of null or not.
 *
 * @param val - input any value
 * @returns The result of `val === null`
 *
 * @example
 * isNull(null) // true
 * isNull(undefined) // false
 */
const isNull = <T extends unknown>(val: T): IsNull<T> =>
  (val === NULL) as IsNull<T>

export { isNull }
export type { IsNull }
