// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Return lowercase string.
 *
 * @param val - Input string value
 * @returns Lowercase string
 *
 * @example
 * ```ts
 * toLower('Hello') // hello
 * ```
 *
 * @see Related to {@link upperCase}
 *
 * @public
 */
const lowerCase = <T extends string>(val: T): Lowercase<T> =>
  val.toLowerCase() as Lowercase<T>

export { lowerCase }
