// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { endsWith } from '../src/endsWith.ts'

Deno.test('endsWith', () => {
  const table: [string, string, boolean][] = [
    ['', '', true],
    ['o', 'hello', true],
    ['world', 'hello world', true],
    ['O', 'hello', false],
    ['earth', 'hello world', false],
    ['Hello', 'hello', false]
  ]
  table.forEach(([val, target, expected]) => {
    assertEquals(
      endsWith(val, target),
      expected,
      `endsWith(${val}, ${target}) -> ${expected}`
    )
  })
})
