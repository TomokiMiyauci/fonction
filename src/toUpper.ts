/**
 * Return uppercase string
 *
 * @beta
 *
 * @param val - input string value
 * @returns uppercase string
 *
 * @example
 * ```ts
 * toUpper('Hello') // HELLO
 * ```
 */
const toUpper = <T extends string>(val: T): Uppercase<T> =>
  val.toUpperCase() as Uppercase<T>

export { toUpper }
