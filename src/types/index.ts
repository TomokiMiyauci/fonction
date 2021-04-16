/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type of any function
 *
 * @typeParam T - argument types
 */
export type AnyFn<T = any> = (...args: T[]) => unknown
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | undefined
  | null
export type InferArray<T> = T extends (infer R)[] ? R : never
