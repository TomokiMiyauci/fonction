// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { Space } from './types/index.ts'

/**
 * Infer the string with the right ends of trimmed.
 *
 * @typeParam T - Any string
 * @returns String right ends of trimmed
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * TrimRight<'hello \n\t'> // 'hello'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link TrimLeft} {@link Trim}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
type TrimRight<T extends string> = T extends `${infer R}${Space}`
  ? TrimRight<R>
  : T

/**
 * Removes space from right ends of the string.
 *
 * @param val - input string
 * @returns The result of `val.trimRight()`
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * trimRight('hello   ') // 'hello'
 * trimRight('hello \n\t') // 'hello'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link trimLeft} {@link trim}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const trimRight = <T extends string>(val: T): TrimRight<T> =>
  val.trimRight() as TrimRight<T>

export { trimRight }
export type { TrimRight }
