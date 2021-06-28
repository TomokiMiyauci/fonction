// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { curry } from '../deps.ts'

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
 * @deprecated The module has moved to {@link https://github.com/TomokiMiyauci/core-fn}.
 */
const test = curry(_test)

export { _test, test }
