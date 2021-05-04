// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Whatever argument is `Array` or not.
 *
 * @param val - input any value
 * @returns The result of `Array.isArray(val)`
 *
 * @example
 * ```ts
 * isArray([]) // true
 * isArray(['hello', 'world']) // true
 * isArray({}) // false
 * ```
 *
 * @public
 */
const isArray = (val: unknown): val is any[] => Array.isArray(val)

export { isArray }
