// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Symbol or not.
 *
 * @typeParam T - Any value
 *
 * @deprecated Removed
 */
type IsSymbol<T extends unknown> = T extends symbol ? true : false

/**
 * Whatever argument is type of `symbol` or not.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'symbol'`
 *
 * @example
 * ```ts
 * isSymbol(Symbol('hello')) // true
 * isSymbol('hello') // false
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/is-valid}.
 */
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export { isSymbol }
export type { IsSymbol }
