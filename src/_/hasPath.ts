// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { head } from '../../common/head.ts'
import { isLength0, isObject, isUndefined } from '../../deps.ts'
import { and } from '../and.ts'
import { ifElse } from '../ifElse.ts'
import { tail } from '../tail.ts'
import { has } from './has.ts'

/**
 * Returns whether or not a path exists in an object. Only the object's own properties are checked.
 *
 * @param path - The path to use
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
 * @internal
 */

// TODO: Improve type inference
const hasPath = <T extends unknown>(
  path: (string | number)[],
  obj: Record<PropertyKey, T>
): boolean => {
  const key = head(path)
  if (isUndefined(key)) return false
  const rest = tail(path)
  if (isLength0(rest)) {
    return has(key, obj)
  }
  return ifElse(
    and(has(key, obj), () => isObject(obj[key])),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => hasPath(rest, obj[key] as any),
    false
  )
}

export { hasPath }
