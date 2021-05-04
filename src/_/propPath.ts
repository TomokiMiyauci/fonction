// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { has } from '../has.ts'
import { not } from '../not.ts'

/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 *
 * @param val - input property key
 * @param obj - The object to query
 * @returns The result of safety `obj[val]`
 *
 * @example
 * ```ts
 * propPath('x', { x: 'hello' }) // 'hello'
 * propPath(1, { 1: 100 }) // 100
 * propPath('x', {}) // undefined
 * ```
 *
 * @internal
 */
const propPath = <
  T extends (string | number)[],
  U extends Record<PropertyKey, unknown>
>(
  val: T,
  obj: U
): unknown | undefined =>
  not(has(val, obj))
    ? undefined
    : val.reduce((acc, cur) => acc[cur] as never, obj as U)

export { propPath }

propPath([''], { '': '' })
