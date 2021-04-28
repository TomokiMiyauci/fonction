import { hasOwnProperty } from './constants/index.ts'

/**
 * Returns whether or not an object has an own property with the specified name.
 *
 * @param props - The name of the property to check for
 * @param obj - The check object
 * @returns The result of `Object.prototype.hasOwnProperty.call(obj, props)`
 *
 * @example
 * ```ts
 * has('hello', { hello: 'world' }) // true
 * has(0, { 0 : 1}) // true
 * has('', {}) // false
 * has('hello', { hi : hello: 'world' }) // false
 * ```
 *
 * @public
 */
const has = <T extends unknown>(
  props: string | number,
  obj: Record<PropertyKey, T>
): boolean => hasOwnProperty.call(obj, props)

export { has }
