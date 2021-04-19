import { Ord } from '@/types'

/**
 * Returns `true` if the first argument is less than or equal to the second; otherwise `false`
 *
 * @param a - The first input value
 * @param b - The second input value
 * @returns The result of `a <= b`
 *
 * @example
 * ```ts
 * // Number
 * lte(1, 2) // true
 * lte(2, 2) // true
 * lte(2, 1) // false
 * ```
 *
 * @example
 * ```ts
 * // Bigint
 * lte(1n, 2n) // true
 * lte(2n, 2n) // true
 * lte(2n, 1n) // true
 * ```
 *
 * @example
 * ```ts
 * // String
 * lte('a', 'z') // true
 * lte('a', 'a') // true
 * lte('z', 'a') // false
 * ```
 *
 * @example
 * ```ts
 * // Boolean
 * lte(true, true) // true
 * lte(false, false) // true
 * lte(false, true) // true
 * lte(true, false) // false
 * ```
 *
 * @example
 * ```ts
 * // Date
 * lte(new Date('2000/1/1'), new Date('2000/1/1')) // true
 * lte(new Date('1999/12/31'), new Date('2000/1/1')) // true
 * lte(new Date('2000/1/2'), new Date('2000/1/1')) // false
 * ```
 *
 * @public
 */
const lte = <T extends Ord>(a: T, b: T): boolean => a <= b

export { lte }
