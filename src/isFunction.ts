import { FUNCTION } from '@/constants'
import type { AnyFn } from '@/types'

/**
 * Function or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsFunction<T extends unknown> = T extends AnyFn ? true : false

/**
 * Whatever argument is type of `function` or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'function'`
 *
 * @example
 * ```ts
 * isFunction(function) // true
 * isFunction('hello') // false
 * ```
 *
 * @public
 */
const isFunction = (val: unknown): val is AnyFn => typeof val === FUNCTION

export { isFunction }
export type { IsFunction }
