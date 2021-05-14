// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { upperCase } from '../src/upperCase.ts'

Deno.test('upperCase', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'HELLO'],
    ['hello', 'HELLO'],
    ['Hello World', 'HELLO WORLD']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(upperCase(val), expected, `upperCase(${val}) -> ${expected}`)
  })
})
