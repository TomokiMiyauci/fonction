import { IsPrimitive, isPrimitive } from '@/isPrimitive'

/**
 * Object or not
 *
 * @typeParam T - any value
 *
 * @public
 */
type IsObject<T extends unknown> = IsPrimitive<T> extends true ? false : true

/**
 * Whatever argument is type of `object` or not.
 *
 * @param val - input any value
 * @returns The result of object or not
 *
 * @remarks
 * Definition of Object
 *
 * Not Primitive
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
 *
 * @example
 * ```ts
 * isObject([]) // true
 * isObject('hello') // false
 * ```
 *
 * @public
 */
const isObject = <T extends unknown>(val: T): val is T =>
  !isPrimitive(val) as IsObject<T>

export { isObject }
export type { IsObject }
