import { STRING } from '@/constants'

/**
 * String or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsString<T extends unknown> = T extends string ? true : false

/**
 * Whatever argument is type of string or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'string'`
 *
 * @example
 * ```ts
 * isString('hello world') // true
 * isString(1000) // false
 * ```
 *
 * @public
 */
const isString = (val: unknown): val is string => typeof val === STRING

export { isString }
export type { IsString }
