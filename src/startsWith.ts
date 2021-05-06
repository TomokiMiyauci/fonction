// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isString } from './isString.ts'

type StringWith<
  T extends 'startsWith' | 'endsWith',
  U extends string | undefined = undefined
> = U extends undefined
  ? (target: string) => ReturnType<string[T]>
  : ReturnType<string[T]>

type StartsWith<T extends string | undefined = undefined> = StringWith<
  'startsWith',
  T
>

/**
 * Checks if a string starts with the provided substring.
 *
 * @param val - search string
 * @param target - target string
 * @returns The result of `target.startsWith(val)`
 *
 * @example
 * ```ts
 * // Basic
 * startsWith('hello', 'hello world') // true
 * startsWith('good', 'hello world') // false
 * ```
 *
 * @example
 * ```ts
 * // Curry
 * const startWithSlash = startsWith('/')
 * startWithSlash('/path/to') // true
 * ```
 *
 * @see Related to {@link endsWith}
 *
 * @public
 */
const startsWith = <T extends string, U extends string | undefined = undefined>(
  val: T,
  target?: U
): StartsWith<U> => {
  if (isString(target)) {
    return target.startsWith(val) as StartsWith<U>
  }
  return ((_target: string) => startsWith(val, _target)) as StartsWith<U>
}

export { startsWith }
export type { StringWith }
