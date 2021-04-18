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
export type InferArray<T> = T extends (infer R)[] ? R : never
