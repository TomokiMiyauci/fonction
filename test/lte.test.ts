// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { lte } from '../src/lte.ts'
import { Ord } from '../src/types/index.ts'

Deno.test('lte', () => {
  const table: [Ord, Ord, boolean][] = [
    [1, 0, false],
    [0, 0, true],
    [0, 1, true],
    [1n, 0n, false],
    [0n, 0n, true],
    [0n, 1n, true],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'a', true],
    ['a', 'z', true],
    [true, false, false],
    [true, true, true],
    [false, false, true],
    [false, true, true],
    [new Date('2000/1/2'), new Date('2000/1/1'), false],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), true],
    [new Date('1999/12/31'), new Date('2000/1/1'), true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(lte(a, b), expected, `lte(${a}, ${b}) -> ${expected}`)
  })
})
