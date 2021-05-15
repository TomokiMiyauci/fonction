// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isPrimitive } from './isPrimitive.ts'
import { N } from './N.ts'

/**
 * Whatever argument is type of `object` or not.
 *
 * @param val - Input any value
 * @returns The result of object or not
 *
 * @remarks
 * Definition of Object
 *
 * Not Primitive
 *
 * @remarks
 * Definition of Primitive
 * - `string`
 * - `number`
 * - `bigint`
 * - `boolean`
 * - `symbol`
 * - `undefined`
 * - `null`
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
// eslint-disable-next-line @typescript-eslint/ban-types
const isObject = (val: unknown): val is Record<string, unknown> =>
  N(isPrimitive(val))

export { isObject }
