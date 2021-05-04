// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { inc } from '../src/inc.ts'
import { assertEqual } from './asserts.ts'
Deno.test('inc', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [number | bigint | any, number | bigint][] = [
    [0, 1],
    [-10, -9],
    [10, 11],
    [0n, 1n],
    [-10n, -9n],
    [10n, 11n]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(inc(val), expected, `inc(${val}) -> ${expected}`)
  })

  assertEqual<number>(inc(1 as const))
  assertEqual<number>(inc(1))
  assertEqual<bigint>(inc(1n as const))
  assertEqual<bigint>(inc(1n))
})
