// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { subtract as _subtract } from '../deps.ts'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { _ } from './constants/index.ts'

// re-export

/**
 * Subtracts its second argument from its first argument.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The result of `a - b`
 *
 * @remarks
 * Since subtraction is not idempotent, there are two ways to curry.
 *
 * @example
 * ```ts
 * // Number
 * subtract(2, 1) // 1
 * ```
 *
 * @example
 * ```ts
 * // Bigint
 * subtract(3n, 2n) //1n
 * ```
 *
 * @example
 * ```ts
 * // First argument curry
 * const from5Minus = subtract(5)
 * from5Minus(10) // -5
 * ```
 *
 * @example
 * ```ts
 * // Second argument curry
 * import { _ } from 'fonction'
 * const minus5 = (_, 5)
 * minus5(20) // 15
 * ```
 *
 * @public
 */
export const subtract = _subtract
