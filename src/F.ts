import { AnyFn } from '@/types'

/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @returns false
 *
 * @example
 * ```ts
 * F() // false
 * F(1, 'hello', 'world') // false
 * ```
 *
 * @beta
 */
const F: AnyFn<unknown, false> = () => false

export { F }