/**
 * Return the parameter supplied to it.
 *
 * @param val - The value to return
 * @returns The result of `val`
 *
 * @example
 * ```ts
 * identity(1) // 1
 * identity({}) // {}
 * ```
 *
 * @public
 */
const identity = <T>(val: T): T => val

export { identity }
