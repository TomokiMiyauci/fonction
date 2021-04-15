import { FUNCTION } from '@/constants'
import type { AnyFn } from '@/types'

/**
 * Function or not
 *
 * @typeParam T - any value
 */
type IsFunction<T extends unknown> = T extends AnyFn ? true : false

/**
 * Whatever argument is type of function or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'function'`
 *
 * @example
 * isFunction(function) // true
 * isFunction('hello') // false
 */
const isFunction = <T extends unknown>(val: T): IsFunction<T> =>
  (typeof val === FUNCTION) as IsFunction<T>

export { isFunction }
export type { IsFunction }
