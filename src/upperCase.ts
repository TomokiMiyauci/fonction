// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Return uppercase string
 *
 * @param val - input string value
 * @returns uppercase string
 *
 * @example
 * ```ts
 * toUpper('Hello') // HELLO
 * ```
 *
 * @public
 */
const upperCase = <T extends string>(val: T): Uppercase<T> =>
  val.toUpperCase() as Uppercase<T>

export { upperCase }
