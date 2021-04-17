/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type of any function
 *
 * @beta
 *
 * @typeParam T - argument types
 */
export type AnyFn<T = any> = (...args: T[]) => unknown

/**
 * Alias for Primitive values types
 *
 * @beta
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
