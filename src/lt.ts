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
 * @beta
 */
const lt = <T extends string | number | bigint>(a: T, b: T): boolean => a < b

export { lt }
