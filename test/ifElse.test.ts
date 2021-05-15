// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { assertEquals, spy } from '../dev_deps.ts'
import { ifElse } from '../src/ifElse.ts'
import { length } from '../src/length.ts'
import { T } from '../src/T.ts'
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
    [0, 1, 0, 0],
    [() => true, 1, 0, 1],
    [() => false, 1, 0, 0],
    [() => 1, 1, 0, 1],
    [() => 0, 1, 0, 0]
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
  assertEqual<1>(ifElse(() => true as const, 1 as const, '' as const))
  assertEqual<''>(ifElse(() => false as const, 1 as const, '' as const))
  assertEqual<1 | ''>(ifElse(() => 1, 1 as const, '' as const))
})

Deno.test('ifElse:iife', () => {
  const table: [unknown, boolean, boolean, number][] = [
    [true, true, true, 2],
    [true, false, true, 1],
    [true, true, false, 1],
    [false, true, true, 2],
    [false, false, true, 1],
    [false, true, false, 1]
  ]

  table.forEach(([val, onTrue, onFalse, expected]) => {
    const fn = spy()
    ifElse(val, onTrue ? fn() : T, onFalse ? fn() : T)
    assertEquals(
      length(fn.calls),
      expected,
      `ifElse(${val}, fn(), fn()) -> fn.calls.length:${expected}`
    )
  })
})

Deno.test('ifElse:fn', () => {
  const table: [unknown, unknown][] = [
    [true, true],
    [false, undefined]
  ]

  table.forEach(([val, expected]) => {
    const onTrue = spy(() => true)
    ifElse(val, onTrue, T)

    assertEquals(
      onTrue.calls[0]?.returned,
      expected,
      `ifElse(${val}, fn, fn) -> fn.calls[0].returned:${expected}`
    )
  })
})
