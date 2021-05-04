// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { AnyFn } from './types/index.ts'

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
 * @public
 */
const F: AnyFn<unknown, false> = () => false

export { F }
