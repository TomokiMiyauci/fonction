import { isArray } from './isArray.ts'
import { length } from './length.ts'

/**
 * Infer the last types.
 *
 * @typeParam T - `string` or any `array`
 *
 * @example
 * ```ts
 * // String
 * Last<string> // string
 * Last<'hello'> // string
 * ```
 *
 * @example
 * ```ts
 * // Array
 * Last<[] | never[] | readonly [] | readonly never[]> // undefined
 * Last<['hello', 'world']> // 'world'
 * Last<string | number[]> // string | number
 * ```
 * @beta
 */
type Last<T extends string | readonly unknown[]> = T extends
  | never[]
  | readonly never[]
  ? undefined
  : T extends unknown[] | readonly unknown[]
  ? [never, ...T][T['length']]
  : T extends string
  ? string
  : never

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
const last = <T extends string | readonly unknown[]>(val: T): Last<T> => {
  if (isArray(val)) {
    return length(val) ? (val.slice(-1)[0] as Last<T>) : (undefined as Last<T>)
  } else {
    return (val as string).slice(-1) as Last<T>
  }
}

export { last }
export type { Last }
