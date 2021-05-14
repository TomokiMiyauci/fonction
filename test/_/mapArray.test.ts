// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { assertEquals } from '../../dev_deps.ts'
import { MapArray, mapArray } from '../../src/_/mapArray.ts'
import { AnyFn } from '../../src/types/index.ts'
import { assertEqual } from '../asserts.ts'
Deno.test('mapArray', () => {
  const table: [AnyFn, unknown[], unknown[]][] = [
    [() => {}, [], []],
    [() => 1, [], []],
    [() => '', [], []],
    [() => {}, [''], [undefined]],
    [() => {}, ['', 1], [undefined, undefined]],
    [() => {}, ['', 1, {}], [undefined, undefined, undefined]],
    [() => 1, [[]], [1]],
    [() => 1, [[], [], 1, 0], [1, 1, 1, 1]]
  ]
  table.forEach(([fn, array, expected]) => {
    assertEquals(
      mapArray(fn, array),
      expected,
      `mapArray(${fn}, ${array}) -> ${expected}`
    )
  })

  assertEqual<[]>(mapArray(() => {}, []))
  assertEqual<[]>(mapArray(() => {}, [] as []))
  assertEqual<[]>(mapArray(() => {}, [] as const))
  assertEqual<[]>(mapArray(() => 1, []))
  assertEqual<1[]>(mapArray(() => 1, ['']))
  assertEqual<1[]>(mapArray(() => 1, [''] as const))
  assertEqual<1[]>(mapArray(() => 1, [''] as ['']))
  assertEqual<(1 | 2)[]>(mapArray(() => 1 as 1 | 2, [''] as ['']))
  assertEqual<number[]>(mapArray(() => 1, [[]]))
  assertEqual<1[]>(mapArray(() => 1, [[]]))
  assertEqual<1[]>(mapArray(() => 1, [[]] as const))
})

Deno.test('types', () => {
  assertEqual<[], MapArray<void, [] | never[]>>()
  assertEqual<readonly [], MapArray<void, readonly [] | readonly never[]>>()
  assertEqual<undefined[], MapArray<void, [''] | unknown[]>>()
  assertEqual<1[], MapArray<1, [''] | unknown[]>>()
  assertEqual<number[], MapArray<number, [''] | [[]]>>()
})
