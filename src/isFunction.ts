// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import type { AnyFn } from './types/index.ts'

/**
 * Function or not.
 *
 * @typeParam T - Any value
 *
 * @deprecated Removed
 */
type IsFunction<T extends unknown> = T extends AnyFn ? true : false

/**
 * Whatever argument is type of `function` or not.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'function'`
 *
 * @example
 * ```ts
 * isFunction(function) // true
 * isFunction('hello') // false
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/is-valid}.
 */
const isFunction = (val: unknown): val is AnyFn => typeof val === 'function'

export { isFunction }
export type { IsFunction }
