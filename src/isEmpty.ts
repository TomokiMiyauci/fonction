import { and } from './and.ts'
import { isObject } from './isObject.ts'
import { isString } from './isString.ts'
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

// eslint-disable-next-line @typescript-eslint/ban-types
const isEmpty = (val: unknown): val is Empty => {
  if (isString(val)) return !length(val)
  else if (Array.isArray(val)) return !length(val)
  else if (isObject(val))
    return and(
      !length(Object.keys(val as Record<string, unknown>)),
      (val as Record<string, unknown>).constructor === Object
    )
  else return false
}

export { isEmpty }
