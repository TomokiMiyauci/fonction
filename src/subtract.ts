import { subtract as _subtract } from 'arithmetic4'

// re-export

/**
 * Subtracts second argument from first argument.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The result of `a` - `b`
 *
 * @example
 * Basic
 * subtract(2, 1) // 1
 *
 * @example
 * Curry
 * const minus5 = subtract(5)
 * minus5(10) // 5
 */
export const subtract = _subtract
