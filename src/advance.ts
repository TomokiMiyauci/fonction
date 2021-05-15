// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { ifElse } from './ifElse.ts'
import { isFunction } from './isFunction.ts'
import { AnyFn } from './types/index.ts'
/**
 * Returns return value if argument is `function`; otherwise returns the value as it is.
 *
 * @param val - Input any value
 * @returns The result of `typeof val === 'function' ? val(): val`
 *
 * @example
 * ```ts
 * advance(1) // 1
 * advance(() => 1) // 1
 * ```
 *
 * @category `Logic`
 *
 * @public
 */
const advance = <T>(val: T | AnyFn<any, T>): T =>
  ifElse(isFunction(val), () => (val as AnyFn<any, T>)(), val)

export { advance }
