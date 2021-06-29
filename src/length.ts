// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Returns length property.
 *
 * @param val - Value with length property
 * @returns The result of `val.length`
 *
 * @example
 * ```ts
 * length('hello') // 5
 * length(['hello', 'world', 1]) // 3
 * length({length: 5, text: 'hello'}) // 5
 * ```
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const length = <T extends { length: number }>(val: T): T['length'] => val.length

export { length }
