// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { lowerCase } from '../src/lowerCase.ts'

Deno.test('lowerCase', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'hello'],
    ['HeLlo', 'hello'],
    ['hello', 'hello'],
    ['Hello World', 'hello world']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(lowerCase(val), expected, `lowerCase(${val}) -> ${expected}`)
  })
})
