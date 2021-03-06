// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isNumber } from '../deps.ts'
import { add } from './add.ts'

/**
 * Increments its argument.
 *
 * @param val - Input `number` or `bigint`
 * @returns Incremented `val`
 *
 * @example
 * ```ts
 * inc(100) // 101
 * inc(10n) // 11n
 * ```
 *
 * @see Related to {@link dec}
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
