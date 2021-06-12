// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { gte } from './gte.ts'
import { ifElse } from './ifElse.ts'
import { length } from './length.ts'

type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => void : never
) extends (arg: infer I) => void
  ? I
  : never

type Tuple = readonly unknown[]

/**
 * @internal
 *
 * @example
 * ```ts
 * Pop<[1, 2, 3]> = [1, 2].
 * ```
 */
type Pop<T extends Tuple> = T extends [...infer Head, infer _] ? Head : never

/**
 * @example
 * ```ts
 * Shift<[1], [1, 2, 3]> = [2, 3].
 * Shift<[1, 2], [1, 2, 3]> = [3].
 * ```
 */
type Shift<Shifted extends Tuple, T extends Tuple> = T extends [
  ...Shifted,
  ...infer Rest
]
  ? Rest
  : never

/**
 * @example
 * ```ts
 * Slices<[1, 2, 3]> = [1] | [1, 2] | [1, 2, 3].
 * ```
 */
type Slices<T extends Tuple> = T extends [] ? never : T | Slices<Pop<T>>

/**
 * @example
 * ```ts
 * OverloadsByArgs<[1] | [1, 2], [1, 2, 3], 7> =
 *  | CurriedWithFixArgs<[1], [2, 3], 7>
 *  | CurriedWithFixArgs<[1, 2], [3], 7>.
 * ```
 */
type OverloadsByArgs<
  Args extends Tuple,
  FullArgs extends Tuple,
  ReturnValue
> = Args extends unknown
  ? CurriedWithFixArgs<Args, Shift<Args, FullArgs>, ReturnValue>
  : never

type CurriedWithFixArgs<
  Args extends Tuple,
  RestArgs extends Tuple,
  ReturnValue
> = (...args: Args) => Curried<RestArgs, ReturnValue>

type Curried<Args extends Tuple, ReturnValue> = Args extends []
  ? ReturnValue
  : UnionToIntersection<OverloadsByArgs<Slices<Args>, Args, ReturnValue>>

/**
 * Creates a function that accepts arguments of `fn` and either invokes `fn` returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining `fn` arguments, and so on.
 *
 * @param fn - The function to curry
 * @returns The new curried function
 *
 * @remarks
 * Maximum number of arity is 16. Beyond that, the type system will breaks.
 *
 * @example
 * ```ts
 * const replace = (from: string, to: string, val: string) => val.replace(from, to)
 * const curriedReplace = curry(replace)
 * const curriedReplace('hello', 'hi', 'hello world') // 'hi world'
 * const curriedReplace('hello')('hi', 'hello world') // 'hi world'
 * const curriedReplace('hello')('hi')('hello world') // 'hi world'
 * ```
 *
 * @beta
 */
const curry = <T extends unknown[], R>(
  fn: (...args: T) => R
): T['length'] extends 0 ? () => R : Curried<T, R> => {
  const curried: any = (...t: T) =>
    ifElse(
      gte(length(t), length(fn)),
      () => fn(...t),
      () => curried.bind(null, ...t)
    )

  return curried
}

export { curry }
