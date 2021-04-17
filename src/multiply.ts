import { multiply as _multiply } from 'arithmetic4'

// re-export

/**
 * Multiplies first argument and second argument.
 *
 * @public
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
 */
export const multiply = _multiply
