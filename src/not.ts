// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { FalsyLike } from './types/index.ts'
/**
 * Returns the `!` of its argument.
 *
 * @param val - Input any value
 * @returns The result of `!val`
 *
 * @remarks
 * The Definition of Falsy
 * - `''`
 * - `false`
 * - `0`
 * - `NaN`
 * - `undefined`
 * - `null`
 *
 * @example
 * ```ts
 * not('') // true
 * not(false) // true
 * not(0) // true
 * not(NaN) // true
 * not(undefined) // true
 * not(null) // true
 *
 * not({}) // false
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link N} {@link NN}
 *
 * @public
 * @deprecated
 * Rename to `NN`
 */
const not = <T>(val: T): T extends FalsyLike ? true : boolean =>
  !val as T extends FalsyLike ? true : boolean
export { not }
