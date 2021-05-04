// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { lt } from '../src/lt.ts'
import { Ord } from '../src/types/index.ts'

Deno.test('lt', () => {
  const table: [Ord, Ord, boolean][] = [
    [0, 0, false],
    [1, 0, false],
    [0, 1, true],
    [0n, 0n, false],
    [1n, 0n, false],
    [0n, 1n, true],
    ['a', 'a', false],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'z', true],
    [true, true, false],
    [false, false, false],
    [true, false, false],
    [false, true, true],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), false],
    [new Date('2000/1/2'), new Date('2000/1/1'), false],
    [new Date('1999/12/31'), new Date('2000/1/1'), true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(lt(a, b), expected, `lt(${a}, ${b}) -> ${expected}`)
  })
})
