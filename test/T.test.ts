// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { T } from '../src/T.ts'
import { assertReturnType } from './asserts.ts'

Deno.test('T', () => {
  const table: unknown[] = [
    [''],
    [1, 2, 3],
    [{}, [], undefined, null],
    [undefined],
    [null]
  ]
  table.forEach((val) => {
    assertEquals(T(val), true, `T(${val}) -> true`)
  })

  assertReturnType<true>(T)
})
