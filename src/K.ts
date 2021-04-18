/**
 * K combinator. Returns a function that always returns the given value.
 *
 * @param val - The value to wrap in a function
 *
 * @returns function wrapped `val`
 *
 * @example
 * ```ts
 * const k = K('k')
 * k() // 'k'
 * ```
 *
 * @beta
 */
const K = <T extends unknown>(val: T): (() => T) => (): T => val

export { K }