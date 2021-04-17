import { STRING } from '@/constants'

/**
 * String or not
 *
 * @public
 *
 * @typeParam T - any value
 */
type IsString<T extends unknown> = T extends string ? true : false

/**
 * Whatever argument is type of string or not.
 *
 * @public
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'string'`
 *
 * @example
 * ```ts
 * isString('hello world') // true
 * isString(1000) // false
 * ```
 */
const isString = (val: unknown): val is string => typeof val === STRING

export { isString }
export type { IsString }
