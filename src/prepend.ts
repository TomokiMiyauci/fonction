/**
 * Returns a new list with the given value at the front, followed by the contents of the list.
 *
 * @param val - The value to add to the front of the new list
 * @param list - The list of elements to add a new item to
 * @returns The result of `[val, ...list]`
 *
 * @example
 * ```ts
 * prepend('Tom', ['hello']) // ['Tom', 'hello']
 * prepend('Tom', []) // ['Tom']
 * prepend(['Tom'], ['hello', 'world']) // [['Tom'], 'hello', 'world']
 * ```
 *
 *
 * @public
 */
const prepend = <T, U>(val: T, list: U[]): (T | U)[] => [val, ...list]
export { prepend }
