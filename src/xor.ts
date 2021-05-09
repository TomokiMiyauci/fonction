// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { not } from './not.ts'
import { FalsyLike } from './types/index.ts'

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
 * @see Related to {@link and} {@link or}
 *
 * @public
 */
const xor = <T, U>(
  a: T,
  b: U
): T extends FalsyLike ? (U extends FalsyLike ? false : boolean) : boolean =>
  (not(a) !== (not(b) as unknown)) as T extends FalsyLike
    ? U extends FalsyLike
      ? false
      : boolean
    : boolean
export { xor }
