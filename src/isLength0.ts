// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isArray } from './isArray.ts'
import { isString } from './isString.ts'
import { length } from './length.ts'
import { N } from './N.ts'
import { or } from './or.ts'
/**
 * Whatever argument length is `0` or not.
 *
 * @param val - Input any value
 * @returns The result of `!val.length` (if not have `length` property, `false`)
 *
 * @example
 * ```ts
 * isLength0([]) // true
 * isLength0([]) // true
 * isLength0('hello') // false
 * isLength0(undefined) // false
 * ```
 *
 * @category `Array` `String`
 *
 * @public
 */
const isLength0 = (val: unknown): val is 0 =>
  ifElse(
    or(isString(val), () => isArray(val)),
    () => N(length(val as string | unknown[])),
    false
  )

export { isLength0 }
