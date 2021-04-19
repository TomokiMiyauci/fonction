import { IsString } from '@/isString'
import { length } from '@/length'
import { InferArray } from '@/types'

type Last<T extends string | unknown[]> = IsString<T> extends true
  ? string
  : T extends never[]
  ? undefined
  : InferArray<T>

/**
 * Returns the last element of the given list or string.
 *
 * @param val - string or any array object
 * @returns The last element of the `val`
 *
 * @example
 * ```ts
 * // String
 * last('hello') // 'o'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * last('hello', 'new', 'world') // 'world'
 * last([]) // undefined
 * last(['one', 2, 3, 4]) // 4
 * ```
 *
 * @public
 */
const last = <T extends string | unknown[]>(val: T): Last<T> => {
  if (Array.isArray(val)) {
    return length(val) ? (val.slice(-1)[0] as Last<T>) : (undefined as Last<T>)
  } else {
    return (val as string).slice(-1) as Last<T>
  }
}

export { last }
