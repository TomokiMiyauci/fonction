// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { IsPrimitive, isPrimitive } from './isPrimitive.ts'
import { not } from './not.ts'

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
  not(isPrimitive(val) as IsObject<T>)

export { isObject }
export type { IsObject }
