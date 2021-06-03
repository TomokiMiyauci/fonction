import { AnyFn } from './types/index.ts'

/**
 * Performs left-to-right function composition.
 *
 * @param functions - Multi any functions
 * @returns A `function` what argument is `function[0]` argument
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
 *
 */
const pipe: Pipe =
  (...args: AnyFn[]) =>
  (initialArg: unknown) =>
    args.reduce((acc, cur) => cur(acc), initialArg)

export { pipe }

type Arity1Fn<T = any, U = unknown> = (args: T) => U

type Pipe = {
  <F1 extends AnyFn>(fn1: F1): (...initialArg: Parameters<F1>) => ReturnType<F1>

  <F1 extends AnyFn, F2 extends Arity1Fn<ReturnType<F1>>>(...fn1: [F1, F2]): (
    ...initialArg: Parameters<F1>
  ) => ReturnType<F2>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>
  >(
    ...fn1: [F1, F2, F3]
  ): (...initialArg: Parameters<F1>) => ReturnType<F3>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>
  >(
    ...fn1: [F1, F2, F3, F4]
  ): (...initialArg: Parameters<F1>) => ReturnType<F4>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>
  >(
    ...fn1: [F1, F2, F3, F4, F5]
  ): (...initialArg: Parameters<F1>) => ReturnType<F5>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6]
  ): (...initialArg: Parameters<F1>) => ReturnType<F6>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7]
  ): (...initialArg: Parameters<F1>) => ReturnType<F7>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8]
  ): (...initialArg: Parameters<F1>) => ReturnType<F8>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8, F9]
  ): (...initialArg: Parameters<F1>) => ReturnType<F9>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10]
  ): (...initialArg: Parameters<F1>) => ReturnType<F10>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>,
    F11 extends Arity1Fn<ReturnType<F10>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11]
  ): (...initialArg: Parameters<F1>) => ReturnType<F11>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>,
    F11 extends Arity1Fn<ReturnType<F10>>,
    F12 extends Arity1Fn<ReturnType<F11>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12]
  ): (...initialArg: Parameters<F1>) => ReturnType<F12>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>,
    F11 extends Arity1Fn<ReturnType<F10>>,
    F12 extends Arity1Fn<ReturnType<F11>>,
    F13 extends Arity1Fn<ReturnType<F12>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13]
  ): (...initialArg: Parameters<F1>) => ReturnType<F13>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>,
    F11 extends Arity1Fn<ReturnType<F10>>,
    F12 extends Arity1Fn<ReturnType<F11>>,
    F13 extends Arity1Fn<ReturnType<F12>>,
    F14 extends Arity1Fn<ReturnType<F13>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14]
  ): (...initialArg: Parameters<F1>) => ReturnType<F14>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>,
    F11 extends Arity1Fn<ReturnType<F10>>,
    F12 extends Arity1Fn<ReturnType<F11>>,
    F13 extends Arity1Fn<ReturnType<F12>>,
    F14 extends Arity1Fn<ReturnType<F13>>,
    F15 extends Arity1Fn<ReturnType<F14>>
  >(
    ...fn1: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15]
  ): (...initialArg: Parameters<F1>) => ReturnType<F15>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>,
    F11 extends Arity1Fn<ReturnType<F10>>,
    F12 extends Arity1Fn<ReturnType<F11>>,
    F13 extends Arity1Fn<ReturnType<F12>>,
    F14 extends Arity1Fn<ReturnType<F13>>,
    F15 extends Arity1Fn<ReturnType<F14>>,
    F16 extends Arity1Fn<ReturnType<F15>>
  >(
    ...fn1: [
      F1,
      F2,
      F3,
      F4,
      F5,
      F6,
      F7,
      F8,
      F9,
      F10,
      F11,
      F12,
      F13,
      F14,
      F15,
      F16
    ]
  ): (...initialArg: Parameters<F1>) => ReturnType<F16>

  <
    F1 extends AnyFn,
    F2 extends Arity1Fn<ReturnType<F1>>,
    F3 extends Arity1Fn<ReturnType<F2>>,
    F4 extends Arity1Fn<ReturnType<F3>>,
    F5 extends Arity1Fn<ReturnType<F4>>,
    F6 extends Arity1Fn<ReturnType<F5>>,
    F7 extends Arity1Fn<ReturnType<F6>>,
    F8 extends Arity1Fn<ReturnType<F7>>,
    F9 extends Arity1Fn<ReturnType<F8>>,
    F10 extends Arity1Fn<ReturnType<F9>>,
    F11 extends Arity1Fn<ReturnType<F10>>,
    F12 extends Arity1Fn<ReturnType<F11>>,
    F13 extends Arity1Fn<ReturnType<F12>>,
    F14 extends Arity1Fn<ReturnType<F13>>,
    F15 extends Arity1Fn<ReturnType<F14>>,
    F16 extends Arity1Fn<ReturnType<F15>>,
    F17 extends Arity1Fn<ReturnType<F16>>
  >(
    ...fn1: [
      F1,
      F2,
      F3,
      F4,
      F5,
      F6,
      F7,
      F8,
      F9,
      F10,
      F11,
      F12,
      F13,
      F14,
      F15,
      F16,
      F17
    ]
  ): (...initialArg: Parameters<F1>) => ReturnType<F17>
}
