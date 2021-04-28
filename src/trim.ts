import { Whitespace } from './types/index.ts'

type Trim<T extends string> = T extends `${Whitespace}${infer U}`
  ? Trim<U>
  : T extends `${infer U}${Whitespace}`
  ? Trim<U>
  : T

/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @param val - `string` to trim
 * @returns Trimmed `val`
 *
 * @example
 * ```ts
 * trim('   hello   ') // 'hello'
 * ```
 *
 * @public
 */
const trim = <T extends string>(val: T): Trim<T> => val.trim() as Trim<T>

export { trim }
