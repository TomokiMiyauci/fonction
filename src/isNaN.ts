/**
 * Whatever argument is `NaN` or not.
 *
 * @param val - input any value
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
 * @beta
 *
 */
const isNaN = (val: unknown): val is typeof NaN => Number.isNaN(val)

export { isNaN }
