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
const trim = (val: string): ReturnType<string['trim']> => val.trim()

export { trim }
