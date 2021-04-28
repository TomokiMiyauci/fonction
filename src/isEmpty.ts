import { and } from './and.ts'
import { isArray } from './isArray.ts'
import { isObject } from './isObject.ts'
import { isString } from './isString.ts'
import { keys } from './keys.ts'
import { length } from './length.ts'
import { Empty } from './types/index.ts'

/**
 * Returns `true` if the given value is its type's empty value; otherwise `false`.
 *
 * @param val - input any value
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
 * @beta
 */
const isEmpty = (val: unknown): val is Empty => {
  if (isString(val)) return !length(val)
  else if (isArray(val)) return !length(val)
  else if (isObject(val))
    return and(
      !length(keys(val as Record<PropertyKey, unknown>)),
      (val as Record<PropertyKey, unknown>).constructor === Object
    )
  else return false
}

export { isEmpty }
