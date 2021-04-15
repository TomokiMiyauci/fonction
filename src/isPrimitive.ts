import { IsBigint, isBigint } from '@/isBigint'
import { IsBoolean, isBoolean } from '@/isBoolean'
import { IsNill, isNill } from '@/isNill'
import { IsNumber, isNumber } from '@/isNumber'
import { IsString, isString } from '@/isString'
import { IsSymbol, isSymbol } from '@/isSymbol'

/**
 * Primitive or not
 *
 * @typeParam T - any value
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
 * Whatever argument is primitive or not.
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
 * isPrimitive(true) // true
 * isPrimitive([]) // false
 */
const isPrimitive = <T extends unknown>(val: T): IsPrimitive<T> =>
  [isNill, isBoolean, isNumber, isString, isBigint, isSymbol].some((is) =>
    is(val)
  ) as IsPrimitive<T>

export { isPrimitive }
export type { IsPrimitive }
