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
const test = (regExp: RegExp, val: string): boolean => regExp.test(val)

export { test }
