import { Ord } from '@/types'

/**
 * Returns `true` if the first argument is less than the second; otherwise `false`
 *
 * @param a - The first input value
 * @param b - The second input value
 * @returns The result of `a < b`
 *
 * @example
 * ```ts
 * // Number
 * lt(1, 2) // true
 * lt(2, 2) // false
 * ```
 *
 * @example
 * ```ts
 * // Bigint
 * lt(1n, 2n) // true
 * lt(2n, 2n) // false
 * ```
 *
 * @example
 * ```ts
 * // String
 * lt('a', 'z') // true
 * lt('a', 'a') // false
 * ```
 *
 * @example
 * ```ts
 * // Boolean
 * lt(false, true) // true
 * lt(true, true) // false
 * lt(false, false) // false
 * lt(true, false) // false
 * ```
 *
 * @example
 * ```ts
 * // Date
 * lt(new Date('1999/12/31'), new Date('2000/1/1')) // true
 * lt(new Date('2000/1/1'), new Date('2000/1/1')) // false
 * lt(new Date('2000/1/2'), new Date('2000/1/1')) // false
 * ```
 *
 * @beta
 */
const lt = <T extends Ord>(a: T, b: T): boolean => a < b

export { lt }
