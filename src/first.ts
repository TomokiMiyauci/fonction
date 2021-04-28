import { isArray } from './isArray.ts'
import { length } from './length.ts'
import { InferArray } from './types/index.ts'
/**
 * Returns the first element of the given list or string.
 *
 * @param val - string or any array object
 * @returns The first element of the `val`
 *
 * @example
 * ```ts
 * // String
 * first('hello') // 'h'
 * ```
 *
 * @example
 * ```ts
 * // Array
 * first('hello', 'new', 'world') // 'hello'
 * first([]) // undefined
 * first(['one', 2, 3, 4]) // 'one'
 * ```
 *
 * @public
 */
const first: {
  (val: string): string
  <T extends unknown[]>(val: T): T['length'] extends 0
    ? undefined
    : InferArray<T> | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: any) => {
  if (isArray(val)) {
    return length(val) ? val.slice(0, 1)[0] : undefined
  } else {
    return (val as string).slice(0, 1)
  }
}

export { first }
