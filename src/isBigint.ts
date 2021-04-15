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
 * @param val - input any value
 * @returns The result of `typeof val === 'bigint'`
 *
 * @example
 * isBigint(1n) // true
 * isBigint(1000) // false
 */
const isBigint = <T extends unknown>(val: T): IsBigint<T> =>
  (typeof val === BIGINT) as IsBigint<T>

export { isBigint }
export type { IsBigint }
