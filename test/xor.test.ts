// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { xor } from '../src/xor.ts'
import { Falsy } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('xor', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, false],
    [false, false, false],
    [() => false, () => true, true],
    [() => true, () => false, true],
    [() => true, () => true, false],
    [() => false, () => false, false],
    [() => false, () => false, false],
    [() => 1, () => 0, true],
    [() => 0, () => 0, false],
    [true, () => false, true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(xor(a, b), expected, `xor(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<false>(xor(false as Falsy, false as Falsy))
  assertEqual<boolean>(xor(Boolean, Boolean))
  assertEqual<false>(
    xor(
      () => 0 as const,
      () => 0 as const
    )
  )
  assertEqual<boolean>(
    xor(
      () => 0 as const,
      () => 1
    )
  )

  // Because Truthy can not define.
  assertEqual<boolean>(xor(true as const, true as const))
  assertEqual<boolean>(xor(true as const, Boolean))
  assertEqual<boolean>(xor(Boolean, true as const))
})
