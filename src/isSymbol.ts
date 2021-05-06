// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Symbol or not.
 *
 * @typeParam T - Any value
 *
 * @public
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
 * @public
 */
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export { isSymbol }
export type { IsSymbol }
