// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { and } from './and.ts'
import { isArray } from './isArray.ts'
import { isLength0 } from './isLength0.ts'
import { isObject } from './isObject.ts'
import { isString } from './isString.ts'
import { keys } from './keys.ts'
import { or } from './or.ts'
import { Empty } from './types/index.ts'

/**
 * Returns `true` if the given value is its type's empty value; otherwise `false`.
 *
 * @param val - Input any value
 * @returns The result of empty or not
 *
 * @remarks
 * The definition of Empty
 * - `''`
 * - `{}`
 * - `[]`
 *
 * @example
 * ```ts
 * isEmpty('') // true
 * isEmpty({}) // true
 * isEmpty([]) // true
 *
 * isEmpty('hello world') // false
 * isEmpty(1000) // false
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/is-valid}.
 */
const isEmpty = (val: unknown): val is Empty => {
  if (or(isString(val), () => isArray(val))) return isLength0(val)
  else if (isObject(val))
    return and(isLength0(keys(val)), () => val.constructor === Object)
  else return false
}

export { isEmpty }
