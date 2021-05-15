// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals, spy } from '../dev_deps.ts'
import { length } from '../src/length.ts'
import { or } from '../src/or.ts'
import { FalsyLike } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('or', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, true],
    [false, false, false],
    [() => 1, () => 1, true],
    [() => 1, () => 0, true],
    [() => 0, () => 1, true],
    [() => 0, () => 0, false],
    [false, () => 0, false],
    [false, () => 1, true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(or(a, b), expected, `or(${a}, ${b}) -> ${expected}`)
  })

  const fn = spy(() => true)
  const fn2 = spy(() => false)

  or(fn, fn2)
  assertEquals(length(fn2.calls), 0)

  assertEqual<false>(or(false as FalsyLike, false as FalsyLike))
  assertEqual<boolean>(or(Boolean, Boolean))
  assertEqual<boolean>(
    or(
      () => false as const,
      () => true as const
    )
  )
  assertEqual<false>(
    or(
      () => false as const,
      () => false as const
    )
  )

  // Because Truthy can not define.
  assertEqual<boolean>(or(true as const, true as const))
  assertEqual<boolean>(or(true as const, Boolean))
  assertEqual<boolean>(or(Boolean, true as const))
})
