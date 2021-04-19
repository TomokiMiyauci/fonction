import { SYMBOL } from '@/constants'

/**
 * Symbol or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsSymbol<T extends unknown> = T extends symbol ? true : false

/**
 * Whatever argument is type of `symbol` or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'symbol'`
 *
 * @example
 * ```ts
 * isSymbol(Symbol('hello')) // true
 * isSymbol('hello') // false
 * ```
 *
 * @public
 */
const isSymbol = (val: unknown): val is symbol => typeof val === SYMBOL

export { isSymbol }
export type { IsSymbol }