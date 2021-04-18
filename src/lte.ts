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
 * @beta
 */
const lte = <T extends string | number | bigint>(a: T, b: T): boolean => a <= b

export { lte }
