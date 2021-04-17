/**
 * Return uppercase string
 *
 * @public
 *
 * @param val - input string value
 * @returns uppercase string
 *
 * @example
 * ```ts
 * toUpper('Hello') // HELLO
 * ```
 */
const upperCase = <T extends string>(val: T): Uppercase<T> =>
  val.toUpperCase() as Uppercase<T>

export { upperCase }
