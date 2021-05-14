import { equal as _equal } from '../deps.ts'

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles cyclical data structures.
 *
 * @param a - Input any value
 * @param b - Input any value
 * @returns Return `true` if the reference memory is the same or the property members and their values are the same
 *
 * @example
 * ```ts
 * equals(-0, 0) // true
 * equals(NaN, NaN) // true
 * equals([[[[]]]], [[[[]]]]) // true
 * equals({ a: { b: [1, 2, 3]}}, { a: { b: [1, 2, 3]}}) // true
 * ```
 *
 * @beta
 */
const equal = _equal

export { equal }
