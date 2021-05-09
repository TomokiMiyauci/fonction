// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { NN } from './NN.ts'
import { FalsyLike } from './types/index.ts'
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
 * @see Related to {@link or} {@link xor}
 *
 * @public
 */
const and = <T, U>(
  a: T,
  b: U
): T extends FalsyLike ? false : U extends FalsyLike ? false : boolean =>
  (NN(a) && NN(b)) as T extends FalsyLike
    ? false
    : U extends FalsyLike
    ? false
    : boolean
export { and }
