// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Infer the replacement value.
 *
 * @typeParam T - Original string
 * @typeParam From - Holds the pattern string that need to replace
 * @typeParam To - Holds the replacement string
 *
 * @example
 * ```ts
 * Replace<'hello Tom', 'Tom', 'Bob'> // 'hello Bob'
 * Replace<'hogehoge', 'hoge', 'fuga'> // 'fugahoge'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link ReplaceAll}
 *
 * @public
 */
type Replace<
  T extends string,
  From extends string,
  To extends string
> = From extends '' | To
  ? T
  : T extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : T

/**
 * Replaces matches for `from` in string with `to`.
 *
 * @param from - Holds the pattern string that need to replace
 * @param to - Holds the replacement string
 * @param val - Original string
 * @returns The result of `val.replace(from, to)`
 *
 * @example
 * ```ts
 * replace('hello Tom', 'Tom', 'Bob') // 'hello Bob'
 * replace('hogehoge', 'hoge', 'fuga') // 'fugahoge'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link replaceAll}
 *
 * @public
 */
const replace = <From extends string, To extends string, T extends string>(
  from: From,
  to: To,
  val: T
): Replace<T, From, To> => val.replace(from, to) as Replace<T, From, To>

export { replace }
export type { Replace }
