/**
 * Returns the number of elements in the array or string length.
 *
 * @param val - `string` or any `array`
 * @returns The result of `val.length`
 *
 * @example
 * ```ts
 * length('hello') // 5
 * length(['hello', 'world', 1]) // 3
 * ```
 *
 * @public
 */
const length = <T extends unknown[] | string>(val: T): T['length'] => val.length

export { length }
