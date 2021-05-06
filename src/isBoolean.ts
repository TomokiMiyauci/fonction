// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Boolean or not.
 *
 * @typeParam T - Any value
 *
 * @public
 */
type IsBoolean<T extends unknown> = T extends boolean ? true : false

/**
 * Whatever argument is type of `boolean` or not.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'boolean'`
 *
 * @example
 * ```ts
 * isBoolean(true) // true
 * isBoolean('hello') // false
 * ```
 *
 * @public
 */
const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export { isBoolean }
export type { IsBoolean }
