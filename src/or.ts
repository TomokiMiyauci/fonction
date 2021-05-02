import { Falsy } from './types/index.ts'
/**
 * Returns true if one or both of its arguments are true; otherwise false.
 *
 * @param a - The first input any value
 * @param b - The second input any value
 * @returns The result of `!!a || !!bb`
 *
 * @example
 * ```ts
 * or(true, true) // true
 * or(false, true) // true
 * or(true, false) // true
 * or(false, false) // false
 * ```
 *
 * @public
 */
const or = <T, U>(
  a: T,
  b: U
): T extends Falsy ? (U extends Falsy ? false : boolean) : boolean =>
  (!!a || !!b) as T extends Falsy
    ? U extends Falsy
      ? false
      : boolean
    : boolean
export { or }
