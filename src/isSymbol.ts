import { SYMBOL } from '@/constants'

/**
 * Symbol or not
 *
 * @beta
 *
 * @typeParam T - any value
 */
type IsSymbol<T extends unknown> = T extends symbol ? true : false

/**
 * Whatever argument is type of symbol or not.
 *
 * @beta
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'symbol'`
 *
 * @example
 * ```ts
 * isSymbol(Symbol('hello')) // true
 * isSymbol('hello') // false
 * ```
 */
const isSymbol = (val: unknown): val is symbol => typeof val === SYMBOL

export { isSymbol }
export type { IsSymbol }
