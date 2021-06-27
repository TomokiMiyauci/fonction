// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { Arity1Fn } from './types/index.ts'

/**
 * Runs the given function with the supplied value, then returns the value.
 *
 * @param fn - The function to call with `val`. The return value of fn will be thrown away.
 * @returns The result of `(val) => fn(val)`
 *
 * @example
 * ```ts
 * tap(console.log)('hello') // hello
 * // log: hello
 * ```
 *
 * @public
 */
const tap =
  <T>(fn: Arity1Fn<T>) =>
  <R extends T>(val: R): R => {
    fn(val)
    return val
  }

export { tap }
