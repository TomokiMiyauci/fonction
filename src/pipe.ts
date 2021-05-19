import { AnyFn } from './types/index.ts'

/**
 * Performs left-to-right function composition.
 *
 * @param functions - Multi any functions
 * @returns - A `function` what argument is `function[0]` argument
 *
 * @remarks
 * The first argument may have any arity; the remaining arguments must be unary.
 *
 * @example
 * ```ts
 * const fn = pipe(add , inc)
 * fn(1, 1) // 3
 * ```
 *
 * @beta
 */
const pipe =
  <T extends [AnyFn, AnyFn]>(...functions: T) =>
  (...val: Parameters<T[0]>): ReturnType<T[1]> =>
    functions[1](functions[0](...val)) as any

export { pipe }
