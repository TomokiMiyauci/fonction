// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { advance } from '../src/advance.ts'
import { assertEqual } from './asserts.ts'

Deno.test('advance', () => {
  const table: [unknown, unknown][] = [
    [1, 1],
    [0, 0],
    [() => 1, 1],
    [() => 0, 0]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(advance(val), expected, `add(${val}) -> ${expected}`)
  })

  assertEqual<false>(advance(false))
  assertEqual<1>(advance(1))
  assertEqual<true>(advance(() => true))
  assertEqual<false>(advance(() => false))
})
