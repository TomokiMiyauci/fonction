// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isNumber } from '../deps.ts'
import { subtract } from './subtract.ts'

/**
 * Decrements its argument.
 *
 * @param val - input `number` or `bigint`
 * @returns Decremented `val`
 *
 * @example
 * ```ts
 * dec(100) // 99
 * dec(10n) // 9n
 * ```
 *
 * @see Related to {@link inc}
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
