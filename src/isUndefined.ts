// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Undefined or not.
 *
 * @typeParam T - Any value
 *
 * @public
 */
type IsUndefined<T extends unknown> = T extends undefined ? true : false

/**
 * Whatever argument is type of `undefined` or not.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'undefined'`
 *
 * @example
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined('hello') // false
 * ```
 *
 * @public
 */
const isUndefined = (val: unknown): val is undefined =>
  typeof val === 'undefined'

export { isUndefined }
export type { IsUndefined }
