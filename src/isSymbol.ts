import { SYMBOL } from '@/constants'

/**
 * Symbol or not
 *
 * @typeParam T - any value
 */
type IsSymbol<T extends unknown> = T extends symbol ? true : false

/**
 * Whatever argument is type of symbol or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'symbol'`
 *
 * @example
 * isSymbol(Symbol('hello')) // true
 * isSymbol('hello') // false
 */
const isSymbol = <T extends unknown>(val: T): IsSymbol<T> =>
  (typeof val === SYMBOL) as IsSymbol<T>

export { isSymbol }
export type { IsSymbol }
