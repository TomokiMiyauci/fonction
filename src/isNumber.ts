import { NUMBER } from '@/constants'

/**
 * Number or not
 *
 * @typeParam T - any value
 */
type IsNumber<T extends unknown> = T extends number ? true : false

/**
 * Whatever argument is type of number or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'number'`
 *
 * @example
 * isNumber(0) // true
 * isNumber('hello') // false
 */
const isNumber = <T extends unknown>(val: T): IsNumber<T> =>
  (typeof val === NUMBER) as IsNumber<T>

export { isNumber }
export type { IsNumber }
