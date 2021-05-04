// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * K combinator. Returns a function that always returns the given value.
 *
 * @param val - The value to wrap in a function
 *
 * @returns function wrapped `val`
 *
 * @example
 * ```ts
 * const k = K('k')
 * k() // 'k'
 * ```
 *
 * @public
 */
const K = <T extends unknown>(val: T): (() => T) => (): T => val

export { K }
