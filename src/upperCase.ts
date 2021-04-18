/**
 * Return uppercase string
 *
 * @param val - input string value
 * @returns uppercase string
 *
 * @example
 * ```ts
 * toUpper('Hello') // HELLO
 * ```
 *
 * @public
 */
const upperCase = <T extends string>(val: T): Uppercase<T> =>
  val.toUpperCase() as Uppercase<T>

export { upperCase }
