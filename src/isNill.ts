// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import type { IsNull } from './isNull.ts'
import { isNull } from './isNull.ts'
import { IsUndefined, isUndefined } from './isUndefined.ts'
import { or } from './or.ts'
/**
 * Undefiled or null, or not.
 *
 * @typeParam T - Any value
 *
 * @public
 * @deprecated
 * This is typo. It will rename to `isNil` next major release.
 */
type IsNill<T extends unknown> = IsUndefined<T> extends true
  ? true
  : IsNull<T> extends true
  ? true
  : false

/**
 * Whatever argument is type of `undefined` or `null`.
 *
 * @param val - Input any value
 * @returns The result of type of `val` is undefined or null
 *
 * @example
 * ```ts
 * isNumber(0) // true
 * isNumber('hello') // false
 * ```
 *
 * @public
 *
 * @deprecated
 * This is typo. It will rename to `isNil` next major release.
 *
 */
const isNill = (val: unknown): val is null | undefined =>
  or(isUndefined(val), () => isNull(val))

export { isNill }
export type { IsNill }
