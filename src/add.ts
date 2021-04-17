import { add as _add } from 'arithmetic4'

// re-export

/**
 * Adds first argument and second argument.
 *
 * @public
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The result of `a + b`
 *
 * @example
 * ```ts
 * // Basic
 * add(1, 2) // 3
 * ```
 * @example
 * ```ts
 * // Bigint
 * add(1n, 2n) // 3n
 * ```
 *
 * @example
 * ```ts
 * // Curry
 * const plus2(2)
 * plus2(-3) // -1
 * ```
 */
export const add = _add