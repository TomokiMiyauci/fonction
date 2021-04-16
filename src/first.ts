import { IsString } from '@/isString'
import { InferArray } from '@/types'

type first<T extends string | unknown[]> = IsString<T> extends true
  ? string
  : T extends never[]
  ? undefined
  : InferArray<T>

/**
 * Returns the first element of the given list or string.
 *
 * @param val - string or any array object
 * @returns The first element of the `val`
 *
 * @example
 * String
 * first('hello') // 'h'
 *
 * @example
 * Array
 * first('hello', 'new', 'world') // 'hello'
 * first([]) // undefined
 * first(['one', 2, 3, 4]) // 'one'
 */
const first = <T extends string | unknown[]>(val: T): first<T> => {
  if (Array.isArray(val)) {
    return val.length
      ? (val.slice(0, 1)[0] as first<T>)
      : (undefined as first<T>)
  } else {
    return (val as string).slice(0, 1) as first<T>
  }
}

export { first }
