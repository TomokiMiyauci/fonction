// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Returns an array of values of the enumerable properties of an object.
 *
 * @param val - `Object` that contains the properties and methods
 * @returns The result of `Object.values(val)`
 *
 * @remarks
 * The order of the output array is not guaranteed to be consistent across different platforms.
 *
 * @example
 * ```ts
 * // Object
 * values({}) // []
 * values({ 'a': 'b' }) // ['b']
 * values({ 0: 'hello', 1: 'world' }) // ['hello', 'world']
 * ```
 *
 * @example
 * ```ts
 * // Array
 * values([]) // []
 * values(['hello', 'world']) // ['hello', 'world']
 * ```
 *
 * @category `Array` `Object`
 *
 * @see Related to {@link keys}
 *
 * @public
 */
const values = <T extends unknown>(
  val: Record<PropertyKey, T> | ArrayLike<T>
): T[] => Object.values(val)

export { values }
