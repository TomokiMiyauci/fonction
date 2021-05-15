// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { NN } from '../src/NN.ts'
import { assertEqual } from './asserts.ts'

Deno.test('NN', () => {
  const table: [unknown, boolean][] = [
    ['', false],
    [undefined, false],
    [null, false],
    [0, false],
    [NaN, false],
    [false, false],
    [[], true],
    [{}, true],
    ['hello', true],
    [Infinity, true],
    [1, true],
    [-1, true],
    [true, true]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(NN(val), expected, `NN(${val}) -> ${expected}`)
  })

  assertEqual<false>(NN('' as const))
  assertEqual<false>(NN(0 as const))
  assertEqual<false>(NN(false as const))
  assertEqual<false>(NN(undefined))
  assertEqual<false>(NN(null))
  assertEqual<boolean>(NN(String))
  assertEqual<boolean>(NN(Number))
  assertEqual<boolean>(NN(NaN))
  assertEqual<boolean>(NN(BigInt))
  assertEqual<boolean>(NN(Symbol))
  assertEqual<boolean>(NN(Date))
  assertEqual<boolean>(NN(Object))
  assertEqual<boolean>(NN(Array))
})
