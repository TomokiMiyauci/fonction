// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { has } from './has.ts'
import { ifElse } from './ifElse.ts'
import { isFunction } from './isFunction.ts'
import { isNil } from './isNil.ts'
import { N } from './N.ts'
import { or } from './or.ts'
const toString = (val: unknown): string =>
  ifElse(
    or(isNil(val), () => N(isFunction((val as any).toString))),
    '',
    () => (val as any).toString()
  )

export { toString }
