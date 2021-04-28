import { isNumber } from './isNumber.ts'
import { subtract } from './subtract.ts'

/**
 * Decrements its argument.
 *
 * @param val - input `number` or `bigint`
 * @returns decremented `val`
 *
 * @example
 * ```ts
 * dec(100) // 99
 * dec(10n) // 9n
 * ```
 *
 * @public
 */
const dec: {
  (val: number): number
  (val: bigint): bigint
} = (val: unknown) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (isNumber(val) ? subtract(val, 1) : subtract(val as bigint, 1n)) as any

export { dec }
