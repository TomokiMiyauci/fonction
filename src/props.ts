import { prop } from './_/prop.ts'

/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 *
 * @param val - input property key
 * @param obj - The object to query
 * @returns The result of safety `obj[val]` or `obj[val[0]][val[1]][val[...x]]`
 *
 * @example
 * ```ts
 * props('x', { x: 'hello' }) // 'hello'
 * props(1, { 1: 100 }) // 100
 * props('x', {}) // undefined
 * ```
 *
 * @beta
 */
const props = <
  T extends string | number,
  U extends Record<PropertyKey, unknown>
>(
  val: T,
  obj: U
): U extends Record<T, unknown> ? U[T] : undefined => prop(val, obj)
export { props }
