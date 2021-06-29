// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Number or not.
 *
 * @typeParam T - Any value
 *
 * @deprecated Removed
 */
type IsNumber<T extends unknown> = T extends number ? true : false

/**
 * Whatever argument is type of `number` or not.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'number'`
 *
 * @example
 * ```ts
 * isNumber(0) // true
 * isNumber('hello') // false
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/is-valid}.
 */
const isNumber = (val: unknown): val is number => typeof val === 'number'

export { isNumber }
export type { IsNumber }
