// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Return uppercase string.
 *
 * @param val - Input string value
 * @returns Uppercase string
 *
 * @example
 * ```ts
 * toUpper('Hello') // HELLO
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link lowerCase}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const upperCase = <T extends string>(val: T): Uppercase<T> =>
  val.toUpperCase() as Uppercase<T>

export { upperCase }
