import { BIGINT } from '@/constants'

/**
 * Bigint or not
 *
 * @typeParam T - any value
 */
type IsBigint<T extends unknown> = T extends bigint ? true : false

/**
 * Whatever argument is type of bigint or not.
 *
 * @public
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'bigint'`
 *
 * @example
 * ```ts
 * isBigint(1n) // true
 * isBigint(1000) // false
 * ```
 *
 * @public
 */
const isBigint = (val: unknown): val is bigint => typeof val === BIGINT

export { isBigint }
export type { IsBigint }
