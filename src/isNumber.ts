/**
 * Number or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsNumber<T extends unknown> = T extends number ? true : false

/**
 * Whatever argument is type of `number` or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'number'`
 *
 * @example
 * ```ts
 * isNumber(0) // true
 * isNumber('hello') // false
 * ```
 *
 * @public
 */
const isNumber = (val: unknown): val is number => typeof val === 'number'

export { isNumber }
export type { IsNumber }
