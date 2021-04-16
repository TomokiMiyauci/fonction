import { BOOLEAN } from '@/constants'

/**
 * Boolean or not
 *
 * @typeParam T - any value
 */
type IsBoolean<T extends unknown> = T extends boolean ? true : false

/**
 * Whatever argument is type of boolean or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'boolean'`
 *
 * @example
 * isBoolean(true) // true
 * isBoolean('hello') // false
 */
const isBoolean = (val: unknown): val is boolean => typeof val === BOOLEAN

export { isBoolean }
export type { IsBoolean }
