/**
 * Returns true if both arguments are true; otherwise false.
 *
 * @param a - The first input any value
 * @param b - The second input any value
 * @returns The result of `!!a && !!bb`
 *
 * @example
 * ```ts
 * and(true, true) // true
 * and(false, true) // false
 * and(true, false) // false
 * and(false, false) // false
 * ```
 *
 * @beta
 */
const and = <T, U>(a: T, b: U): boolean => !!a && !!b
export { and }
