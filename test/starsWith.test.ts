// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { startsWith } from '../src/startsWith.ts'

Deno.test('startsWith', () => {
  const table: [string, string, boolean][] = [
    ['', '', true],
    ['hello', 'hello world', true],
    ['H', 'hello', false],
    ['Hello', 'hello', false]
  ]
  table.forEach(([val, target, expected]) => {
    assertEquals(
      startsWith(val, target),
      expected,
      `startsWith(${val}, ${target}) -> ${expected}`
    )
  })
})
