import { Ord } from '@/types'

/**
 * Returns `true` if the first argument is greater than or equal to the second; otherwise `false`
 *
 * @param a - The first input value
 * @param b - The second input value
 * @returns The result of `a >= b`
 *
 * @example
 * ```ts
 * // Number
 * gte(2, 1) // true
 * gte(2, 2) // true
 * gte(2, 3) // false
 * ```
 *
 * @example
 * ```ts
 * // Bigint
 * gte(2n, 1n) // true
 * gte(2n, 2n) // true
 * gte(2n, 3n) // false
 * ```
 *
 * @example
 * ```ts
 * // String
 * gte('z', 'a') // true
 * gte('a', 'a') // true
 * gte('a', 'z') // false
 * ```
 *
 * @example
 * ```ts
 * // Boolean
 * gte(true, false) // true
 * gte(true, true) // true
 * gte(false, false) // true
 * gte(false, true) // false
 * ```
 *
 * @example
 * ```ts
 * // Date
 * gte(new Date('2000/1/2'), new Date('2000/1/1')) // true
 * gte(new Date('2000/1/1'), new Date('2000/1/1')) // true
 * gte(new Date('1999/12/31'), new Date('2000/1/1')) // false
 * ```
 *
 * @public
 */
const gte = <T extends Ord>(a: T, b: T): boolean => a >= b

export { gte }
