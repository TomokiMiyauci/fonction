// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { N } from '../src/N.ts'
import { assertEqual } from './asserts.ts'

Deno.test('N', () => {
  const table: [unknown, boolean][] = [
    ['', true],
    [undefined, true],
    [null, true],
    [0, true],
    [NaN, true],
    [false, true],
    [[], false],
    [{}, false],
    ['hello', false],
    [Infinity, false],
    [1, false],
    [-1, false],
    [true, false]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(N(val), expected, `N(${val}) -> ${expected}`)
  })

  assertEqual<true>(N('' as const))
  assertEqual<true>(N(0 as const))
  assertEqual<true>(N(false as const))
  assertEqual<true>(N(undefined))
  assertEqual<true>(N(null))
  assertEqual<boolean>(N(String))
  assertEqual<boolean>(N(Number))
  assertEqual<boolean>(N(NaN))
  assertEqual<boolean>(N(BigInt))
  assertEqual<boolean>(N(Symbol))
  assertEqual<boolean>(N(Date))
  assertEqual<boolean>(N(Object))
  assertEqual<boolean>(N(Array))
})
