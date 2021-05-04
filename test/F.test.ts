// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { F } from '../src/F.ts'
import { assertReturnType } from './asserts.ts'

Deno.test('F', () => {
  const table: unknown[] = [
    [''],
    [1, 2, 3],
    [{}, [], undefined, null],
    [undefined],
    [null]
  ]
  table.forEach((val) => {
    assertEquals(F(val), false, `F(${val}) -> false`)
  })

  assertReturnType<false>(F)
})
