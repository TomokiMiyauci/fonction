// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { AnyFn } from './types/index.ts'

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @returns `True`
 *
 * @example
 * ```ts
 * T() // true
 * T(1, 'hello', 'world') // true
 * ```
 *
 * @see Related to {@link F}
 *
 * @public
 */
const T: AnyFn<unknown, true> = () => true

export { T }
