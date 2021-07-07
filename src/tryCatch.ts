// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { isFunction, isUndefined } from '../deps.ts'
import { advance } from './advance.ts'
import { ifElse } from './ifElse.ts'
import { N } from './N.ts'
import { AnyFn } from './types/index.ts'

/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned function evaluates the `tryer`; if it does not throw, it simply returns the result. If the `tryer` does throw, the returned function evaluates the catcher function and returns its result.
 *
 * @param tryer - The function that may throw.
 * @param catcher - The function that will be evaluated if tryer throws.
 * @returns - The result of `try { tryer() } catch(e) { catcher(e) }`
 *
 * @example
 * ```ts
 * tryCatch(() => { throw Error('error') }) // Error('error')
 * tryCatch(() => { throw Error('error') }, 0) // 0
 * tryCatch(() => { throw Error('error') }, (e: Error) => e.message ) // 'error'
 * ```
 *
 * @category `Logic`
 *
 * @public
 */
const tryCatch = <R, E, P = unknown>(
  tryer: AnyFn<any, R>,
  catcher?: E | AnyFn<P, E>
): R | E => {
  try {
    return advance(tryer)
  } catch (e) {
    return ifElse(
      isFunction(catcher),
      () => (catcher as AnyFn<P, E>)(e),
      () => ifElse(N(isUndefined(catcher)), catcher, e)
    )
  }
}

export { tryCatch }
