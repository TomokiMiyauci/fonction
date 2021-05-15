// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isFunction } from './isFunction.ts'
import { NN } from './NN.ts'
import { FalsyLike } from './types/index.ts'
import { AnyFn } from './types/index.ts'
/**
 * Returns `true` if both arguments are true; otherwise `false`.
 *
 * @param a - The first input any value
 * @param b - The second input any value
 * @returns The result of `!!a && !!bb` (if argument is function, return value)
 *
 * @remarks
 * If you pass a function as an argument, return value will evaluate.
 *
 * @example
 * ```ts
 * and(true, true) // true
 * and(false, true) // false
 * and(true, false) // false
 * and(false, false) // false
 * and(() => 1, () => 2) // true
 * and(() => 1, () => 0) // false
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link or} {@link xor}
 *
 * @public
 */
const and = <T, U>(
  a: T | AnyFn<any, T>,
  b: U | AnyFn<any, U>
): T extends FalsyLike ? false : U extends FalsyLike ? false : boolean =>
  ifElse(
    ifElse(
      isFunction(a),
      () => NN((a as AnyFn<any, T>)()),
      () => NN(a)
    ),
    () =>
      ifElse(
        isFunction(b),
        () => NN((b as AnyFn<any, U>)()),
        () => NN(b)
      ) as any,
    false
  )

export { and }
