// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { K } from '../src/K.ts'

Deno.test('K', () => {
  const table: [unknown][] = [
    [''],
    [{}],
    ['hello'],
    [() => 1],
    [[]],
    [undefined],
    [null]
  ]

  table.forEach(([val]) => {
    assertEquals(K(val)(), val, `K(${val})() -> ${val}`)
  })
})
