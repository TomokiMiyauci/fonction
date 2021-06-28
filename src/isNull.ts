// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { NULL } from './constants/index.ts'

/**
 * Null or not.
 *
 * @typeParam T - Any value
 *
 * @deprecated Removed
 */
type IsNull<T extends unknown> = T extends null ? true : false

/**
 * Whatever argument is type of `null` or not.
 *
 * @param val - Input any value
 * @returns The result of `val === null`
 *
 * @example
 * ```ts
 * isNull(null) // true
 * isNull(undefined) // false
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/is-valid}.
 *
 */
const isNull = (val: unknown): val is null => val === NULL

export { isNull }
export type { IsNull }
