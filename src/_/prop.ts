import { has } from '../has.ts'

/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 *
 * @param val - input property key
 * @param obj - The object to query
 * @returns The result of safety `obj[val]`
 *
 * @example
 * ```ts
 * prop('x', { x: 'hello' }) // 'hello'
 * prop(1, { 1: 100 }) // 100
 * prop('x', {}) // undefined
 * ```
 *
 * @internal
 */
const prop = <
  T extends string | number,
  U extends Record<PropertyKey, unknown>
>(
  val: T,
  obj: U
): U extends Record<T, unknown> ? U[T] : undefined =>
  (has(val, obj) ? obj[val] : undefined) as U extends Record<T, unknown>
    ? U[T]
    : undefined
export { prop }
