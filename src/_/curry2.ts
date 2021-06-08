import { AnyFn } from '../types/index.ts'

// TODO: To generic

/**
 * Curry function limited arity 2 function
 *
 * @param fn - Arity 2 function
 * @returns Curried function
 *
 * @internal
 */
const curry2 =
  <F extends AnyFn>(fn: F) =>
  <A extends Parameters<F> | [Parameters<F>[0]]>(
    ...args: A
  ): A['length'] extends 1
    ? (arg: Parameters<F>[1]) => ReturnType<F>
    : ReturnType<F> =>
    args.length > 1
      ? (fn(...args) as any)
      : (arg: Parameters<F>[1]) => fn(...args, arg)

export { curry2 }
