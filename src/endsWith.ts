import { isString } from '@/isString'
import { StringWith } from '@/startsWith'

type endsWith<T extends string | undefined = undefined> = StringWith<
  'endsWith',
  T
>

/**
 * Checks if a string ends with the provided substring.
 *
 * @param val - search string
 * @param target - target string
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
 * const endsWithTs = endsWith('ts')
 * endsWithTs('index.ts') // true
 * ```
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
