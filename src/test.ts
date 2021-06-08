// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { curry2 } from './_/curry2.ts'

const _test = (regExp: RegExp, val: string): boolean => regExp.test(val)

/**
 * whether a given `string` matches a given regular expression.
 *
 * @param regExp - Any Regular expression
 * @param val - Any `string` value
 * @returns The result is `regExp.test(val)`
 *
 * @example
 * ```ts
 * test(new RegExp('^test'), 'testdata') // true
 * test(/xyz$/, 'testxyz') // true
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const test = curry2(_test)

export { _test, test }
