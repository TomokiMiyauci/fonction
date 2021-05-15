// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { constructorName } from './_/constructorName.ts'
import { JSON_OBJECT } from './constants/index.ts'

/**
 * Whatever argument is JSON Object or not.
 *
 * @param val - Input any value
 * @returns if `val` is JSON Object `true` otherwise; `false`
 *
 * @example
 * ```ts
 * isJSONObject({ hoge: 'huga'}) // true
 * isJSONObject(Object()) // true
 * isJSONObject(new Object()) // true
 *
 * isJSONObject([]) // false
 * isJSONObject(new Set()) // false
 * ```
 *
 * @public
 */
const isJSONObject = (val: unknown): val is Record<PropertyKey, unknown> =>
  constructorName(val) === JSON_OBJECT

export { isJSONObject }
