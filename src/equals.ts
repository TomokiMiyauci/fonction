import { equalsArray } from './_/equalsArray.ts'
import { equalsNumber } from './_/equalsNumber.ts'
import { equalsObject } from './_/equalsObject.ts'
import { and } from './and.ts'
import { ifElseFn } from './ifElseFn.ts'
import { isArray } from './isArray.ts'
import { isNumber } from './isNumber.ts'
import { isObject } from './isObject.ts'
import { isSymbol } from './isSymbol.ts'
import { or } from './or.ts'

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles cyclical data structures.
 *
 * @param a - Input any value
 * @param b - Input any value
 * @returns Return `true` if the reference memory is the same or the property members and their values are the same
 *
 * @remarks
 * Definition of equivalent
 *
 * Equality is defined as the case where property members and their values are equivalent.
 *
 * Only all primitive values, literal object(`{}`, `{ hoge: 'huga'}`) and Array(regardless of depth) object work correctly.
 *
 * Operation not guaranteed
 *
 * Here are some examples.
 * - `Date`
 * - `Regex`
 * - `Error`
 * - `Set`
 * - `Function`
 * - `Class`
 *
 * @example
 * ```ts
 * equals(-0, 0) // true
 * equals(NaN, NaN) // true
 * equals([[[[]]]], [[[[]]]]) // true
 * equals({ a: { b: [1, 2, 3]}}, { a: { b: [1, 2, 3]}}) // true
 * ```
 *
 * @alpha
 *
 */
const equals = <T, U extends T>(a: T, b: U): boolean => {
  if (a === b) return true

  if (or(isSymbol(a), isSymbol(b))) return false

  if (
    ifElseFn(
      () => and(isNumber(a), isNumber(b)),
      () => equalsNumber(a as unknown as number, b as unknown as number),
      false
    )(a)
  )
    return true

  if (
    ifElseFn(
      () => and(isArray(a), isArray(b)),
      () => equalsArray(a as unknown as unknown[], b as unknown as unknown[]),
      false
    )(a)
  )
    return true

  if (
    ifElseFn(
      () => and(isObject(a), isObject(b)),
      () =>
        equalsObject(
          a as unknown as { [k in PropertyKey]: unknown },
          b as unknown as { [k in PropertyKey]: unknown }
        ),
      false
    )(a)
  )
    return true

  return false
}

export { equals }
