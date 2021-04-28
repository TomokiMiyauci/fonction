import { isArray } from './isArray.ts'
import { length } from './length.ts'

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
const last = <T extends string | unknown[]>(
  val: T
): T extends never[]
  ? undefined
  : T extends unknown[]
  ? [never, ...T][T['length']]
  : T extends string
  ? string
  : never => {
  if (isArray(val)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return length(val) ? (val.slice(-1)[0] as any) : undefined
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (val as string).slice(-1) as any
  }
}

export { last }
