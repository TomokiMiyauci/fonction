import { and } from '@/and'
import { first } from '@/first'
import { has } from '@/has'
import { isObject } from '@/isObject'
import { isUndefined } from '@/isUndefined'
import { length } from '@/length'
import { tail } from '@/tail'

/**
 * Returns whether or not a path exists in an object. Only the object's own properties are checked.
 *
 * @param props - The path to use
 * @param obj - The object to check the path in
 * @returns Whether the path exists
 *
 * @example
 * ```ts
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
const hasPath = <T extends unknown>(
  path: (string | number)[],
  obj: Record<PropertyKey, T>
): boolean => {
  const key = first(path)
  if (isUndefined(key)) return false
  const rest = tail(path)
  if (!length(rest)) {
    return has(key, obj)
  }
  return and(has(key, obj), isObject(obj[key]))
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      hasPath(rest, obj[key] as any)
    : false
}

export { hasPath }
