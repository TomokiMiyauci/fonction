import { STRING } from '@/constants'

/**
 * String or not
 *
 * @typeParam T - any value
 */
type IsString<T extends unknown> = T extends string ? true : false

/**
 * Whatever argument is type of string or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'string'`
 *
 * @example
 * isString('hello world') // true
 * isString(1000) // false
 */
const isString = <T extends unknown>(val: T): IsString<T> =>
  (typeof val === STRING) as IsString<T>

export { isString }
export type { IsString }
