// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Infer the all replacement value.
 *
 * @typeParam T - Original string
 * @typeParam From - Holds the pattern string that need to replace
 * @typeParam To - Holds the replacement string
 *
 * @example
 * ```ts
 * ReplaceAll<'hello Tom', 'Tom', 'Bob'> // 'hello Bob'
 * ReplaceAll<'hogehoge', 'hoge', 'fuga'> // 'fugafuga'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link Replace}
 *
 * @public
 */
type ReplaceAll<
  T extends string,
  From extends string,
  To extends string
> = From extends '' | To
  ? T
  : T extends `${infer L}${From}${infer R}`
  ? `${L}${ReplaceAll<`${To}${R}`, From, To>}`
  : T

/**
 * Replaces all matches for `from` in string with `to`.
 *
 * @param from - Holds the pattern string that need to replace
 * @param to - Holds the replacement string
 * @param val - Original string
 * @returns The result of `val.replaceAll(from, to)`
 *
 * @example
 * ```ts
 * replaceAll('hello Tom', 'Tom', 'Bob') // 'hello Bob'
 * replaceAll('hogehoge', 'hoge', 'fuga') // 'fugafuga'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link replace}
 *
 * @public
 */
const replaceAll = <From extends string, To extends string, T extends string>(
  from: From,
  to: To,
  val: T
): ReplaceAll<T, From, To> =>
  val.replaceAll(from, to) as ReplaceAll<T, From, To>

export { replaceAll }
export type { ReplaceAll }
