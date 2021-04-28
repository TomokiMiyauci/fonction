/**
 * Whatever argument is `Array` or not.
 *
 * @param val - input any value
 * @returns The result of `Array.isArray(val)`
 *
 * @example
 * ```ts
 * isArray([]) // true
 * isArray(['hello', 'world']) // true
 * isArray({}) // false
 * ```
 *
 * @beta
 */
const isArray = (val: unknown): val is any[] => Array.isArray(val)

export { isArray }
