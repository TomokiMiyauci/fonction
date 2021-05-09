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
 * N('') // true
 * N(false) // true
 * N(0) // true
 * N(NaN) // true
 * N(undefined) // true
 * N(null) // true
 *
 * N({}) // false
 * N([]) // false
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link NN}
 *
 * @beta
 */
const N = <T>(val: T): T extends FalsyLike ? true : boolean =>
  !val as T extends FalsyLike ? true : boolean
export { N }
