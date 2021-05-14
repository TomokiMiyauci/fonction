// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { and } from '../src/and.ts'
import { Falsy } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('and', () => {
  const table: [unknown, unknown, boolean][] = [
    [true, true, true],
    [false, true, false],
    [true, false, false],
    [false, false, false]
  ]

  table.forEach(([a, b, expected]) => {
    assertEquals(and(a, b), expected, `add(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<false>(and(false as Falsy, false as Falsy))
  assertEqual<false>(and(false as Falsy, Boolean))
  assertEqual<false>(and(Boolean, false as Falsy))
  assertEqual<boolean>(and(Boolean, Boolean))
})
