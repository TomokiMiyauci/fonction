import { isArray } from './isArray.ts'
import { length } from './length.ts'

/**
 * Infer the first types.
 *
 * @typeParam T - `string` or any `array`
 *
 * @example
 * ```ts
 * // String
 * First<string> // string
 * First<'hello'> // string
 * ```
 *
 * @example
 * ```ts
 * // Array
 * First<[] | never[] | readonly [] | readonly never[]> // undefined
 * First<['hello', 'world']> // 'hello'
 * First<string | number[]> // string | number
 * ```
 *
 * @public
 */
type First<T extends readonly unknown[] | string> = T extends
  | readonly never[]
  | []
  ? undefined
  : T[0]

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
const first = <T extends readonly unknown[] | string>(val: T): First<T> => {
  if (isArray(val)) {
    return length(val)
      ? (val.slice(0, 1)[0] as First<T>)
      : (undefined as First<T>)
  } else {
    return (val as string).slice(0, 1) as First<T>
  }
}

export { first }
export type { First }
