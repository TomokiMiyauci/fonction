// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isString } from './isString.ts'

type EndsWith<T extends string | undefined = undefined> = T extends undefined
  ? (target: string) => ReturnType<string['endsWith']>
  : ReturnType<string['endsWith']>

/**
 * Checks if a string ends with the provided substring.
 *
 * @param val - Search string
 * @param target - Target string
 * @returns The result of `target.endsWith(val)`
 *
 * @example
 * ```ts
 * // Basic
 * endsWith('world', 'hello world') // true
 * endsWith('earth', 'hello world') // false
 * ```
 *
 * @example
 * ```ts
 * // Curry
 * const endsWithHtml = endsWith('html')
 * endsWithHtml('index.html') // true
 * ```
 *
 * @category `String`
 *
 * @see Related to {@link startsWith}
 *
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const endsWith = <T extends string, U extends string | undefined = undefined>(
  val: T,
  target?: U
): EndsWith<U> =>
  ifElse(
    isString(target),
    () => (target as string).endsWith(val) as EndsWith<U>,
    () => ((_target: string) => endsWith(val, _target)) as EndsWith<U>
  )

export { endsWith }
