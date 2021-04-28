import { AnyFn } from './types/index.ts'

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @returns true
 *
 * @example
 * ```ts
 * T() // true
 * T(1, 'hello', 'world') // true
 * ```
 *
 * @public
 */
const T: AnyFn<unknown, true> = () => true

export { T }
