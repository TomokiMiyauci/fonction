// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { advance } from './advance.ts'
import { NN } from './NN.ts'
import { FalsyLike } from './types/index.ts'
import { AnyFn } from './types/index.ts'

/**
 * Returns true if one or both of its arguments are true; otherwise false.
 *
 * @param a - The first input any value
 * @param b - The second input any value
 * @returns The result of `!!a || !!bb` (if argument is function, return value)
 *
 * @remarks
 * If you pass a function as an argument, return value will evaluate.

 * @example
 * ```ts
 * or(true, true) // true
 * or(false, true) // true
 * or(true, false) // true
 * or(false, false) // false
 *
 * or(() => 0, () => 1) // true
 * or(() => 0, () => 0) // false
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link and} {@link xor}
 *
 * @public
 */
const or = <T, U>(
  a: T | AnyFn<any, T>,
  b: U | AnyFn<any, U>
): T extends FalsyLike ? (U extends FalsyLike ? false : boolean) : boolean =>
  (NN(advance(a)) || NN(advance(b))) as T extends FalsyLike
    ? U extends FalsyLike
      ? false
      : boolean
    : boolean
export { or }
