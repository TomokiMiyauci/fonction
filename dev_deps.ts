// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

export {
  assert,
  assertEquals
} from 'https://deno.land/std@0.97.0/testing/asserts.ts'
export const assertEqualsType = <T, U extends T = T>(_actual?: U): void => {}
export { length } from 'https://deno.land/x/core_fn@v1.0.0-beta.8/mod.ts'
export {
  isNumber,
  isString,
  isSymbol
} from 'https://deno.land/x/is_valid@v1.0.0-beta.16/mod.ts'
export { spy } from 'https://deno.land/x/mock@v0.9.5/spy.ts'
