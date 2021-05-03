/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type of any function
 *
 * @public
 *
 * @typeParam T - argument types
 */
export type AnyFn<T = any, U = unknown> = (...args: T[]) => U

/**
 * Alias for Primitive values types
 *
 * @public
 *
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | undefined
  | null

/**
 * Abbreviation for Ordinal
 *
 * @public
 */
export type Ord = string | number | bigint | boolean | Date

/**
 * Alias for Empty values
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Empty = '' | [] | {}

/**
 * Alias for Falsy values
 *
 * @public
 */
export type Falsy = false | '' | 0 | null | undefined

/**
 * Alias for Space values.
 *
 * @beta
 */
export type Space = ' ' | '\n' | '\t'

export type InferArray<T> = T extends (infer R)[] ? R : never
