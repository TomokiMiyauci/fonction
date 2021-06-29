// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isString } from './isString.ts'

type StartsWith<T extends string | undefined = undefined> = T extends undefined
  ? (target: string) => ReturnType<string['startsWith']>
  : ReturnType<string['startsWith']>

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
 * @category `String`
 *
 * @see Related to {@link endsWith}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const startsWith = <T extends string, U extends string | undefined = undefined>(
  val: T,
  target?: U
): StartsWith<U> =>
  ifElse(
    isString(target),
    () => (target as string).startsWith(val) as StartsWith<U>,
    () => ((_target: string) => startsWith(val, _target)) as StartsWith<U>
  )

export { startsWith }
