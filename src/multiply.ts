// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { multiply as _multiply } from '../deps.ts'

// re-export

/**
 * Multiplies first argument and second argument.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The result of `a * b`
 *
 * @example
 * ```ts
 * // Basic
 * multiply(2, 3) // 6
 * ```
 *
 * @example
 * ```ts
 * // Bigint
 * multiply(2n, 3n) // 6n
 * ```
 *
 * @example
 * ```ts
 * // Curry
 * const double = multiply(2)
 * double(4) // 8
 * ```
 *
 * @see Related to {@link add} {@link subtract} {@link divide}
 *
 * @public
 */
export const multiply = _multiply
