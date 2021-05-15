// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { not } from '../src/not.ts'
import { assertEqual } from './asserts.ts'

Deno.test('not', () => {
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
    assertEquals(not(val), expected, `not(${val}) -> ${expected}`)
  })

  assertEqual<true>(not('' as const))
  assertEqual<true>(not(0 as const))
  assertEqual<true>(not(false as const))
  assertEqual<true>(not(undefined))
  assertEqual<true>(not(null))
  assertEqual<boolean>(not(String))
  assertEqual<boolean>(not(Number))
  assertEqual<boolean>(not(NaN))
  assertEqual<boolean>(not(BigInt))
  assertEqual<boolean>(not(Symbol))
  assertEqual<boolean>(not(Date))
  assertEqual<boolean>(not(Object))
  assertEqual<boolean>(not(Array))
})
