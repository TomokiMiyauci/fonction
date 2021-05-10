// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { NN } from './NN.ts'
import { FalsyLike } from './types/index.ts'

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
 * @see Related to {@link and} {@link xor}
 *
 * @public
 */
const or = <T, U>(
  a: T,
  b: U
): T extends FalsyLike ? (U extends FalsyLike ? false : boolean) : boolean =>
  (NN(a) || NN(b)) as T extends FalsyLike
    ? U extends FalsyLike
      ? false
      : boolean
    : boolean
export { or }
