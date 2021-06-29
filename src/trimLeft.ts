// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { Space } from './types/index.ts'

/**
 * Infer the string with the left ends of trimmed.
 *
 * @returns String left ends of trimmed
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * TrimLeft<' \n\thello'> // 'hello'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link TrimRight} {@link Trim}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
type TrimLeft<T extends string> = T extends `${Space}${infer R}`
  ? TrimLeft<R>
  : T

/**
 * Removes space from left ends of the string.
 *
 * @param val - input string
 * @returns The result of `val.trimLeft()`
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * trimLeft('   hello') // 'hello'
 * trimLeft(' \n\thello') // 'hello'
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link trimRight} {@link trim}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const trimLeft = <T extends string>(val: T): TrimLeft<T> =>
  val.trimLeft() as TrimLeft<T>

export { trimLeft }
export type { TrimLeft }
