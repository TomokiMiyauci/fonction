// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { hasOwnProperty } from '../constants/index.ts'

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
 * @internal
 */
const has = <T extends string | number, U extends Record<PropertyKey, unknown>>(
  props: T,
  obj: U
): U extends Record<T, unknown> ? true : false =>
  hasOwnProperty.call(obj, props) as U extends Record<T, unknown> ? true : false

export { has }
