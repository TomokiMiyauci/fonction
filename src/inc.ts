import { add } from '@/add'
import { isNumber } from '@/isNumber'

/**
 * Increments its argument.
 *
 * @param val - input `number` or `bigint`
 * @returns incremented `val`
 *
 * @example
 * ```ts
 * inc(100) // 101
 * inc(10n) // 11n
 * ```
 *
 * @public
 */
const inc: {
  (val: number): number
  (val: bigint): bigint
} = (val: unknown) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (isNumber(val) ? add(val, 1) : add(val as bigint, 1n)) as any

export { inc }
