// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/**
 * Whatever argument is `NaN` or not.
 *
 * @param val - Input any value
 * @returns The result of `Number.isNaN(val)`
 *
 * @remarks
 * `NaN` is primitive `number`.
 *
 * @example
 * ```ts
 * isNaN(NaN) // true
 * isNaN(100) // false
 * ```
 *
 * @public
 *
 */
const isNaN = (val: unknown): val is typeof NaN => Number.isNaN(val)

export { isNaN }
