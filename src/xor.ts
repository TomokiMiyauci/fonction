// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { advance } from './advance.ts'
import { N } from './N.ts'
import { FalsyLike } from './types/index.ts'
import { AnyFn } from './types/index.ts'

/**
 * Returns true if one of the arguments is truthy and the other is falsy; otherwise false.
 *
 * @param a - The first input any value
 * @param b - The second input any value
 * @returns The result of `!a !== !b` (if argument is function, return value)
 *
 * @example
 * ```ts
 * xor(true, false) // true
 * xor(false, true) // true
 * xor(true, true) // false
 * xor(false, false) // false
 * xor(() => 1, () => 0) // true
 * xor(() => 0, () => 0) // false
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link and} {@link or}
 *
 * @public
 */
const xor = <T, U>(
  a: T | AnyFn<any, T>,
  b: U | AnyFn<any, U>
): T extends FalsyLike ? (U extends FalsyLike ? false : boolean) : boolean =>
  (N(advance(a)) !== (N(advance(b)) as unknown)) as T extends FalsyLike
    ? U extends FalsyLike
      ? false
      : boolean
    : boolean
export { xor }
