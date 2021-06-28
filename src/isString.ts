// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * String or not.
 *
 * @typeParam T - Any value
 *
 * @deprecated Removed
 */
type IsString<T extends unknown> = T extends string ? true : false

/**
 * Whatever argument is type of `string` or not.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'string'`
 *
 * @example
 * ```ts
 * isString('hello world') // true
 * isString(1000) // false
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/is-valid}.
 *
 */
const isString = (val: unknown): val is string => typeof val === 'string'

export { isString }
export type { IsString }
