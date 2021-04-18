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
 * @beta
 */
const gte = <T extends string | number | bigint>(a: T, b: T): boolean => a >= b

export { gte }
