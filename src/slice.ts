// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

/**
 * Returns the elements of the given string or array from `from` to `to`.
 *
 * @param from - The start index
 * @param to - The end index
 * @param val - `String` or `Array`
 * @returns The result of `val.slice(from, to)`
 *
 * @example
 * ```ts
 * // String
 * slice(6, 11 ,'hello world') // 'world'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * slice(1, 2 ,[1, 2, 3, 4]) // [2]
 * ```
 *
 * @category `String` `Array`
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const slice = <T extends readonly unknown[] | string>(
  from: number,
  to: number,
  val: T
): T => val.slice(from, to) as T

export { slice }
