// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isFunction } from './isFunction.ts'
import { NN } from './NN.ts'
import { AnyFn } from './types/index.ts'
import { FalsyLike } from './types/index.ts'
/**
 * Return the `onTrue` or the `onFalse` value depending upon the result of the condition `val`.
 *
 * @param val - A predicate value
 * @param onTrue - The `val` evaluates to a truthy value
 * @param onFalse - The `val` evaluates to a falsy value
 * @returns The result of `!!val` ? `onTrue` : `onFalse` (if argument is function, return value)
 *
 * @remarks
 * If you pass a function as an argument, return value will evaluate.
 *
 * @example
 * ```ts
 * ifElse(true, 1, 0) // 1
 * ifElse(false, 1, 0) // 0
 * ifElse(undefined, 1, 0) // 0
 * ifElse(() => true, () => 1, () => 0) // 1
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link ifElseFn}
 *
 * @public
 */
const ifElse = <V, T, F>(
  val: V | AnyFn<any, V>,
  onTrue: T | AnyFn<any, T>,
  onFalse: F | AnyFn<any, F>
): V extends FalsyLike ? F : V extends true ? T : T | F => {
  const result = isFunction(val) ? NN(val()) : NN(val)
  return result
    ? isFunction(onTrue)
      ? (onTrue() as V extends FalsyLike ? F : V extends true ? T : T | F)
      : (onTrue as V extends FalsyLike ? F : V extends true ? T : T | F)
    : isFunction(onFalse)
    ? (onFalse() as V extends FalsyLike ? F : V extends true ? T : T | F)
    : (onFalse as V extends FalsyLike ? F : V extends true ? T : T | F)
}

export { ifElse }
