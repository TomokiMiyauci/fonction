// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { length } from '../src/length.ts'

Deno.test('length', () => {
  const table: [unknown[] | string, number][] = [
    ['', 0],
    [' ', 1],
    ['  ', 2],
    ['a', 1],
    ['ab', 2],
    ['hello', 5],
    [[], 0],
    [[''], 1],
    [['', 0], 2],
    [['', 0, '1'], 3]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(length(val), expected, `length(${val}) -> ${expected}`)
  })
})
