// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Returns a new list containing the contents of the given list, followed by the given value
 *
 * @param val - The value to add to the end of the new list
 * @param list - The list of elements to add a new item to
 * @returns The result of `[...list, val]`
 *
 * @example
 * ```ts
 * append('Tom', ['hello']) // ['hello', 'Tom']
 * append('Tom', []) // ['Tom']
 * append(['Tom'], ['hello', 'world']) // ['hello', 'world', ['Tom']]
 * ```
 *
 *
 * @public
 */
const append = <T, U>(val: T, list: U[]): (T | U)[] => [...list, val]
export { append }
