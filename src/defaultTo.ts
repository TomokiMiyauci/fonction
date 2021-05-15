// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isNaN } from './isNaN.ts'
import { IsNil, isNil } from './isNil.ts'
import { IsNumber } from './isNumber.ts'
import { or } from './or.ts'

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`; otherwise the first argument is returned.
 *
 * @param a - `a` will be returned instead of `default`
 * @returns Returns a function that stores the default `a` value. The function accept `b` argument.
 * if `b` is `null`, `undefined` or `NaN`, return `a`; otherwise return `b`
 *
 * @example
 * ```ts
 * const defaultVal = defaultTo('anonymous')
 * defaultVal(undefined) // 'anonymous'
 * defaultVal(null) // 'anonymous'
 * defaultVal(NaN) // 'anonymous'
 *
 * defaultVal('Tom') // 'Tom'
 * ```
 *
 * @public
 */
const defaultTo =
  <T extends unknown>(a: T) =>
  <U extends unknown>(
    b: U
  ): IsNil<U> extends true ? T : IsNumber<U> extends false ? U : T | U =>
    (or(isNil(b), () => isNaN(b)) ? a : b) as IsNil<U> extends true
      ? T
      : IsNumber<U> extends false
      ? U
      : T | U

export { defaultTo }
