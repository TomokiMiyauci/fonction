// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isFunction } from './isFunction.ts'
import { FalsyLike } from './types/index.ts'
/**
 * Creates a function that will process either the `onTrue` or the `onFalse` function depending upon the result of the condition predicate.
 *
 * @param condition - A predicate function
 * @param onTrue - Any value or A function to invoke when the `condition` evaluates to a truthy value
 * @param onFalse - Any value or A function to invoke when the `condition` evaluates to a falsy value
 * @returns A new function that will process either the `onTrue` or the `onFalse` function depending upon the result of the `condition` predicate
 *
 * @example
 * ```ts
 * ifElseFn((x: number) => x > 10, 'big', 'small')(20) // 'big'
 * const fn = ifElseFn((x: number) => x > 10, (x) => x + 1, (x) => x - 1)
 * fn(11) // 12
 * fn(9) // 8
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link ifElse}
 *
 * @beta
 */
const ifElseFn =
  <V, R, T, F>(
    condition: (val: V) => R,
    onTrue: T | ((val: V) => T),
    onFalse: F | ((val: V) => F)
  ) =>
  (val: V): R extends true ? T : R extends FalsyLike ? F : T | F => {
    if (condition(val)) {
      return isFunction(onTrue)
        ? (onTrue as (val: V) => T)(val)
        : (onTrue as T as any)
    } else {
      return isFunction(onFalse)
        ? (onFalse as (val: V) => F)(val)
        : (onFalse as F as any)
    }
  }

export { ifElseFn }
