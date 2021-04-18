import type { IsNull } from '@/isNull'
import { isNull } from '@/isNull'
import { IsUndefined, isUndefined } from '@/isUndefined'
/**
 * Undefiled or null, or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsNill<T extends unknown> = IsUndefined<T> extends true
  ? true
  : IsNull<T> extends true
  ? true
  : false

/**
 * Whatever argument is type of `undefined` or `null`.
 *
 * @param val - input any value
 * @returns The result of type of `val` is undefined or null
 *
 * @example
 * ```ts
 * isNumber(0) // true
 * isNumber('hello') // false
 * ```
 *
 * @public
 *
 */
const isNill = (val: unknown): val is null | undefined =>
  isUndefined(val) || isNull(val)

export { isNill }
export type { IsNill }
