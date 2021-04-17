/**
 * Return lowercase string
 *
 * @public
 *
 * @param val - input string value
 * @returns lowercase string
 *
 * @example
 * ```ts
 * toLower('Hello') // hello
 * ```
 */
const lowerCase = <T extends string>(val: T): Lowercase<T> =>
  val.toLowerCase() as Lowercase<T>

export { lowerCase }
