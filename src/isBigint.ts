// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Bigint or not.
 *
 * @typeParam T - Any value
 */
type IsBigint<T extends unknown> = T extends bigint ? true : false

/**
 * Whatever argument is type of `bigint` or not.
 *
 * @param val - input any value
 * @returns The result of `typeof val === 'bigint'`
 *
 * @example
 * ```ts
 * isBigint(1n) // true
 * isBigint(1000) // false
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/is-valid}.
 */
const isBigint = (val: unknown): val is bigint => typeof val === 'bigint'

export { isBigint }
export type { IsBigint }
