import { and } from '../and.ts'
import { ifElse } from '../ifElse.ts'
import { isNil } from '../isNil.ts'
import { N } from '../N.ts'

/**
 * Safe getter for `constructor.name`.
 * @param val - Any value
 * @returns If `val` is `null` or `undefined`, empty string; otherwise `constructor.name`
 *
 * @example
 * ```ts
 * constructorName(null) // ''
 * constructorName(undefined) // ''
 * constructorName({}) // 'Object'
 * constructorName('') // 'String'
 * ```
 *
 * @internal
 */
const constructorName = (val: unknown): string =>
  ifElse(
    and(N(isNil(val)), () => (val as Record<string, unknown>).constructor),
    () => (val as Record<string, unknown>).constructor.name ?? '',
    ''
  )

export { constructorName }
