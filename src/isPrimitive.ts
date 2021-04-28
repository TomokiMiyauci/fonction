import { IsBigint, isBigint } from './isBigint.ts'
import { IsBoolean, isBoolean } from './isBoolean.ts'
import { IsNill, isNill } from './isNill.ts'
import { IsNumber, isNumber } from './isNumber.ts'
import { IsString, isString } from './isString.ts'
import { IsSymbol, isSymbol } from './isSymbol.ts'
import { Primitive } from './types/index.ts'

/**
 * Primitive or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsPrimitive<T extends unknown> = IsBigint<T> extends true
  ? true
  : IsBoolean<T> extends true
  ? true
  : IsNill<T> extends true
  ? true
  : IsNumber<T> extends true
  ? true
  : IsString<T> extends true
  ? true
  : IsSymbol<T> extends true
  ? true
  : false

/**
 * Whatever argument is `primitive` or not.
 *
 * @param val - input any value
 * @returns The result of primitive or not
 *
 * @remarks
 * Definition of Primitive
 * - string
 * - number
 * - bigint
 * - boolean
 * - symbol
 * - undefined
 * - null
 *
 * @example
 * ```ts
 * isPrimitive(true) // true
 * isPrimitive([]) // false
 * ```
 *
 * @public
 */
const isPrimitive = (val: unknown): val is Primitive =>
  [isNill, isBoolean, isNumber, isString, isBigint, isSymbol].some((is) =>
    is(val)
  )

export { isPrimitive }
export type { IsPrimitive }
