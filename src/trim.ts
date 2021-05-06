// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { TrimLeft } from './trimLeft.ts'
import { TrimRight } from './trimRight.ts'

/**
 * Infer the trimmed string.
 *
 * @typeParam T - Any string
 * @returns Trimmed string
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * Trim<'\t\n hello \t\n'> // 'hello'
 * ```
 * @public
 */
type Trim<T extends string> = TrimLeft<TrimRight<T>>

/**
 * Removes whitespace from both ends of the string.
 *
 * @param val - `string` to trim
 * @returns The result of `val.trim()`
 *
 * @example
 * ```ts
 * trim('   hello   ') // 'hello'
 * ```
 *
 * @public
 */
const trim = <T extends string>(val: T): Trim<T> => val.trim() as Trim<T>

export { trim }
export type { Trim }
