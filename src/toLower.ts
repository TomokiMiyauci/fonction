/**
 * Return lowercase string
 *
 * @beta
 *
 * @param val - input string value
 * @returns lowercase string
 *
 * @example
 * ```ts
 * toLower('Hello') // hello
 * ```
 */
const toLower = <T extends string>(val: T): Lowercase<T> =>
  val.toLowerCase() as Lowercase<T>

export { toLower }
