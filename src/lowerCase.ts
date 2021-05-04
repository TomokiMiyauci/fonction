// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Return lowercase string
 *
 * @param val - input string value
 * @returns lowercase string
 *
 * @example
 * ```ts
 * toLower('Hello') // hello
 * ```
 *
 * @public
 */
const lowerCase = <T extends string>(val: T): Lowercase<T> =>
  val.toLowerCase() as Lowercase<T>

export { lowerCase }
