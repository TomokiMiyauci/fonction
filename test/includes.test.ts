// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { _includes } from '../src/includes.ts'
Deno.test('includes', () => {
  const table: [unknown[], unknown, boolean][] = [
    [[], '', false],
    [[1, 2, 3], '', false],
    [[1, 2, 3], 1, true]
  ]
  table.forEach(([collection, val, expected]) => {
    assertEquals(
      _includes(collection, val),
      expected,
      `includes(${collection}, ${val}) -> ${expected}`
    )
  })
})
