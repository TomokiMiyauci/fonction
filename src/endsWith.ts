// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isString } from './isString.ts'
import { StringWith } from './startsWith.ts'

type endsWith<T extends string | undefined = undefined> = StringWith<
  'endsWith',
  T
>

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
 * @see Related to {@link startsWith}
 *
 * @public
 */
const endsWith = <T extends string, U extends string | undefined = undefined>(
  val: T,
  target?: U
): endsWith<U> => {
  if (isString(target)) {
    return target.endsWith(val) as endsWith<U>
  }
  return ((_target: string) => endsWith(val, _target)) as endsWith<U>
}

export { endsWith }
