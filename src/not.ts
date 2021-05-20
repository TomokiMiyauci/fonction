// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { N } from './N.ts'
import { AnyFn } from './types/index.ts'
/**
 * Returns the function as is with return value `!`.
 *
 * @param val - Input any `function`
 * @returns The result is function what return value with `!`
 *
 * @example
 * ```ts
 * not(() => true)() // false
 * const gt10 = (val: number) => val > 10
 * not(gt10)(11) // false
 * ```
 *
 * @beta
 */

const not =
  <T extends AnyFn>(fn: T) =>
  (...val: Parameters<T>): boolean =>
    N(fn(...val))

export { not }
