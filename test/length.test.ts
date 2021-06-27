// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { length } from '../src/length.ts'
import { assertEqual } from './asserts.ts'

Deno.test('length', () => {
  const table: [{ length: number } | string, number][] = [
    ['', 0],
    [' ', 1],
    ['  ', 2],
    ['a', 1],
    ['ab', 2],
    ['hello', 5],
    [[], 0],
    [[''], 1],
    [['', 0], 2],
    [['', 0, '1'], 3],
    [{ length: 3 }, 3]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(length(val), expected, `length(${val}) -> ${expected}`)
  })

  assertEqual<number>(length(''))
  assertEqual<number>(length([]))
  assertEqual<number>(length({ length: 1 }))
  assertEqual<1>(length({ length: 1 } as const))
})
