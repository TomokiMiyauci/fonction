// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { NN } from './NN.ts'
import { Falsy } from './types/index.ts'
/**
 * Return the `onTrue` or the `onFalse` value depending upon the result of the condition `val`.
 *
 * @param val - A predicate value
 * @param onTrue - The `val` evaluates to a truthy value
 * @param onFalse - The `val` evaluates to a falsy value
 * @returns The result of `!!val` ? `onTrue` : `onFalse`
 *
 * @example
 * ```ts
 * ifElse(true, 1, 0) // 1
 * ifElse(false, 1, 0) // 0
 * ifElse(undefined, 1, 0) // 0
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link ifElseFn}
 *
 * @beta
 */
const ifElse = <V, T, F>(
  val: V,
  onTrue: T,
  onFalse: F
): V extends Falsy ? F : V extends true ? T : T | F =>
  (NN(val) ? onTrue : onFalse) as V extends Falsy
    ? F
    : V extends true
    ? T
    : T | F

export { ifElse }
