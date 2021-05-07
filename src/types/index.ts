// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type of any function.
 *
 * @public
 *
 * @typeParam T - Argument types
 */
export type AnyFn<T = any, U = unknown> = (...args: T[]) => U

/**
 * Alias for Primitive values types.
 *
 * @category `Alias`
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
 * Abbreviation for Ordinal.
 *
 * @category `Alias`
 *
 * @public
 */
export type Ord = string | number | bigint | boolean | Date

/**
 * Alias for Empty values
 *
 * @category `Alias`
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Empty = '' | [] | {}

/**
 * Alias for Falsy values.
 *
 * @category `Alias`
 *
 * @public
 */
export type Falsy = false | '' | 0 | null | undefined

/**
 * Alias for Space values.
 *
 * @category `Alias`
 *
 * @public
 */
export type Space = ' ' | '\n' | '\t'

export type InferArray<T> = T extends (infer R)[] ? R : never

/**
 * Convert `string` to `array` types.
 *
 * @typeParam T - Any string
 * @returns String array
 *
 * @example
 * ```ts
 * String2Array<string> string[]
 * String2Array<''> // []
 * String2Array<'hello'> // ["h", "e", "l", "l", "o"]
 * ```
 *
 * @internal
 */
export type String2Array<T extends string> = T extends ''
  ? []
  : T extends `${infer F}${infer R}`
  ? [F, ...String2Array<R>]
  : string[]
