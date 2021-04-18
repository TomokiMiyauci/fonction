/**
 * Returns `true` if the first argument is greater than the second; otherwise `false`
 *
 * @param a - The first input value
 * @param b - The second input value
 * @returns The result of `a > b`
 *
 * @example
 * ```ts
 * // Number
 * gt(2, 1) // true
 * gt(2, 2) // false
 * ```
 *
 * @example
 * ```ts
 * // Bigint
 * gt(2n, 1n) // true
 * gt(2n, 2n) // false
 * ```
 *
 * @example
 * ```ts
 * // String
 * gt('z', 'a') // true
 * gt('a', 'z') // false
 * ```
 *
 * @beta
 */
const gt = <T extends string | number | bigint>(a: T, b: T): boolean => a > b

export { gt }
