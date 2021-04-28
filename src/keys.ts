/**
 * Returns the names of the enumerable string properties and methods of an object.
 *
 * @param val - `Object` that contains the properties and methods
 * @returns The result of `Object.keys(val)`
 *
 * @remarks
 * The order of the output array is not guaranteed to be consistent across different JS platforms.
 *
 * @example
 * ```ts
 * keys({}) // []
 * keys({ 'a': 'b' }) // ['a']
 * keys({ 0: 'hello', 1: 'world' }) // ['0', '1']
 * ```
 *
 * @public
 */
const keys = <T extends PropertyKey>(val: Record<T, unknown>): string[] =>
  Object.keys(val)

export { keys }
