/**
 * Return uppercase string
 *
 * @param val - input string value
 * @returns uppercase string
 *
 * @example
 * toUpper('Hello') // HELLO
 */
const toUpper = <T extends string>(val: T): Uppercase<T> =>
  val.toUpperCase() as Uppercase<T>

export { toUpper }
