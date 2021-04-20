/**
 * Returns the number of elements in the array or string length.
 *
 * @param val - `string` or any `array`
 * @returns The result of `val.length`
 *
 * @example
 *
 *
 * @public
 */
const length = <T extends unknown[] | string>(val: T): T['length'] => val.length

export { length }
