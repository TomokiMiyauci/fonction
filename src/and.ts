import { Falsy } from './types/index.ts'
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
 * @public
 */
const and = <T, U>(
  a: T,
  b: U
): T extends Falsy ? false : U extends Falsy ? false : boolean =>
  (!!a && !!b) as T extends Falsy ? false : U extends Falsy ? false : boolean
export { and }
