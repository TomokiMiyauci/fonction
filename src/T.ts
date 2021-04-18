import { AnyFn } from '@/types'

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
 * @beta
 */
const T: AnyFn<unknown, true> = () => true

export { T }