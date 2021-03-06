// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { divide as _divide } from '../deps.ts'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { _ } from './constants/index.ts'

// re-export

/**
 * Divide its second argument from its first argument.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The result of `a / b`

 * @remarks
 * Since division is not idempotent, there are two ways to curry.
 *
 * @example
 * ```ts
 * // Number
 * divide(10, 100) // 0.1
 * ```
 *
 * @example
 * ```ts
 * // Bigint
 * divide(1n, 2n) // 3n
 * ```
 *
 * @example
 * ```ts
 * // First argument curry
 * const reciprocal = divide(1)
 * reciprocal(4) // 0.25
 * ```
 *
 * @example
 * ```ts
 * // Second argument curry
 * import { _ } from 'fonction'
 * const half = divide(_, 2)
 * half(20) // 10
 * ```
 *
 * @category `Math`
 *
 * @see Related to {@link add} {@link subtract} {@link multiply}
 *
 * @public
 */
export const divide = _divide
