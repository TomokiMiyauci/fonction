// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { xor } from '../src/xor.ts'
import { Falsy } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('xor', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, false],
    [false, false, false]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(xor(a, b), expected, `xor(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<false>(xor(false as Falsy, false as Falsy))
  assertEqual<boolean>(xor(Boolean, Boolean))

  // Because Truthy can not define.
  assertEqual<boolean>(xor(true as const, true as const))
  assertEqual<boolean>(xor(true as const, Boolean))
  assertEqual<boolean>(xor(Boolean, true as const))
})
