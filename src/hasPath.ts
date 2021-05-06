// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { hasPath as _hasPath } from './_/hasPath.ts'

/**
 * Returns whether or not a path exists in an object. Only the object's own properties are checked.
 *
 * @deprecated
 * This function will remove next major release.
 * `hasPath` merged `has` function.
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
 * @public
 */
const hasPath = _hasPath

export { hasPath }
