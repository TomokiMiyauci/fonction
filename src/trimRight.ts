import { Space } from './types/index.ts'

/**
 * Infer the string with the right ends of trimmed.
 *
 * @typeParam T - any string
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
 * @public
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
 * @public
 */
const trimRight = <T extends string>(val: T): TrimRight<T> =>
  val.trimRight() as TrimRight<T>

export { trimRight }
export type { TrimRight }
