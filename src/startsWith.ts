import { isString } from '@/isString'

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
 * @param val - search string
 * @param target - target string
 * @returns The result of `target.startsWith(val)`
 *
 * @example
 * Basic
 * startsWith('hello', 'hello world') // true
 * startsWith('good', 'hello world') // false
 *
 * @example
 * Curry
 * const startWithSlash = startsWith('/')
 * startWithSlash('/path/to') // true
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
