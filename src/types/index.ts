/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Type of any function
 *
 * @typeParam T - argument types
 */
export type AnyFn<T = any> = (...args: T[]) => unknown
