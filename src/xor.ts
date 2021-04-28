import { not } from './not.ts'

/**
 * Returns true if one of the arguments is truthy and the other is falsy; otherwise false.
 *
 * @param a - The first input any value
 * @param b - The second input any value
 * @returns The result of `!a !== !b`
 *
 * @example
 * ```ts
 * xor(true, false) // true
 * xor(false, true) // true
 * xor(true, true) // false
 * xor(false, false) // false
 * ```
 *
 * @public
 */
const xor = <T, U>(a: T, b: U): boolean => not(a) !== (not(b) as boolean)
export { xor }
