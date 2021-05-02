import { has as _has } from './_/has.ts'
import { hasPath as _hasPath } from './_/hasPath.ts'
import { isArray } from './isArray.ts'

/**
 * Returns whether or not an object has an own property with the specified name.
 *
 * @param props - The name of the property to check for
 * @param obj - The check object
 * @returns The result of `Object.prototype.hasOwnProperty`
 *
 * @example
 * ```ts
 * // Flat
 * has('hello', { hello: 'world' }) // true
 * has(0, { 0 : 1}) // true
 * has('', {}) // false
 * has('hello', { hi : hello: 'world' }) // false
 * ```
 *
 * @example
 * ```ts
 * // Nest
 * hasPath(['hello'], { hello: 'world' }) // true
 * hasPath([0], { 0: 1 }) // true
 * hasPath(['hello', 'world'], { hello: { world: '' } } // true
 *
 * hasPath(['hi'], { hello: '' } ) // false
 * hasPath(['hi', 'Tom'], { hi: { John: 1 } } ) // false
 * ```
 *
 * @public
 */
const has = <
  T extends string | number | (string | number)[],
  U extends Record<PropertyKey, unknown>
>(
  props: T,
  obj: U
): T extends unknown[]
  ? boolean
  : T extends string | number
  ? U extends Record<T, unknown>
    ? true
    : false
  : never =>
  isArray(props)
    ? _hasPath(props, obj)
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (_has(props as string | number, obj) as any)

export { has }
