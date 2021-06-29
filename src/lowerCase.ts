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
 * @category `String`
 *
 * @see Related to {@link upperCase}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const lowerCase = <T extends string>(val: T): Lowercase<T> =>
  val.toLowerCase() as Lowercase<T>

export { lowerCase }
