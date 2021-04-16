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
const isNumber = (val: unknown): val is number => typeof val === NUMBER

export { isNumber }
export type { IsNumber }
