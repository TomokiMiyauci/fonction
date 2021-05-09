// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { Falsy } from './types/index.ts'
/**
 * Abbreviation for Not Not. Returns the `!!` of its argument.
 *
 * @param val - Input any value
 * @returns The result of `!!val`
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
 * NN('') // false
 * NN(false) // false
 * NN(0) // false
 * NN(NaN) // false
 * NN(undefined) // false
 * NN(null) // false
 *
 * NN({}) // true
 * NN([]) // true
 * ```
 *
 * @category `Logic`
 *
 * @see Related to {@link N}
 *
 * @beta
 */
const NN = <T>(val: T): T extends Falsy ? false : boolean =>
  !!val as T extends Falsy ? false : boolean
export { NN }
