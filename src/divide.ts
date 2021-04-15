import { divide as _divide } from 'arithmetic4'

// re-export

/**
 * Divide input two arguments.
 *
 * @param a - The first input number
 * @param b - The second input number
 * @returns The result of `a / b`

 * @remarks Note that when use curry, divide second argument from first argument.

 * @example
 * Basic
 * divide(10, 100) // 0.1
 *
 * @example
 * Curry
 * const half = divide(2)
 * half(20) // 10
 */
export const divide = _divide