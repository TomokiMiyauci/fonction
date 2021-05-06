// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { Ord } from './types/index.ts'
/**
 * Returns `true` if the first argument is greater than the second; otherwise `false`.
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
 * @example
 * ```ts
 * // Boolean
 * gt(true, false) // true
 * gt(false, true) // false
 * gt(true, true) // false
 * gt(false, false) // false
 * ```
 *
 * @example
 * ```ts
 * // Date
 * gt(new Date('2000/1/2'), new Date('2000/1/1')) // true
 * gt(new Date('1999/12/31'), new Date('2000/1/1')) // false
 * gt(new Date('2000/1/1'), new Date('2000/1/1')) // false
 * ```
 *
 * @public
 */
const gt = <T extends Ord>(a: T, b: T): boolean => a > b

export { gt }
