// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { ifElse } from '../src/ifElse.ts'
import { assertEqual } from './asserts.ts'

Deno.test('ifElse', () => {
  const table: [unknown, unknown, unknown, unknown][] = [
    [true, 1, 0, 1],
    [{}, 1, 0, 1],
    [[], 1, 0, 1],
    ['hello', 1, 0, 1],
    [false, 1, 0, 0],
    ['', 1, 0, 0],
    [NaN, 1, 0, 0],
    [undefined, 1, 0, 0],
    [null, 1, 0, 0],
    [0, 1, 0, 0]
  ]

  table.forEach(([val, onTrue, onFalse, expected]) => {
    assertEquals(
      ifElse(val, onTrue, onFalse),
      expected,
      `ifElse(${val}, ${onTrue}, ${onFalse}) -> ${expected}`
    )
  })

  assertEqual<number>(ifElse(true, 1, 0))
  assertEqual<number>(ifElse(true as const, 1, 0))
  assertEqual<1>(ifElse(true as const, 1 as const, 0))
  assertEqual<0>(ifElse(false as const, 1 as const, 0 as const))
  assertEqual<1 | ''>(ifElse(false, 1 as const, '' as const))
  assertEqual<1 | ''>(ifElse({}, 1 as const, '' as const))
})
