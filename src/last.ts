import { IsString } from '@/isString'
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
 * String
 * last('hello') // 'o'
 *
 * @example
 * Array
 * last('hello', 'new', 'world') // 'world'
 * last([]) // undefined
 * last(['one', 2, 3, 4]) // 4
 */
const last = <T extends string | unknown[]>(val: T): Last<T> => {
  if (Array.isArray(val)) {
    return val.length ? (val.slice(-1)[0] as Last<T>) : (undefined as Last<T>)
  } else {
    return (val as string).slice(-1) as Last<T>
  }
}

export { last }
