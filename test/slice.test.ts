// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { slice } from '../src/slice.ts'
import { assertEqual } from './asserts.ts'

Deno.test('slice', () => {
  const table: [number, number, unknown[] | string, unknown[] | string][] = [
    [0, 0, [], []],
    [0, Infinity, [], []],
    [Infinity, Infinity, [], []],
    [0, Infinity, [1], [1]],
    [0, Infinity, [1, 2, 3, 4], [1, 2, 3, 4]],
    [0, 2, [1, 2, 3, 4], [1, 2]],
    [-0, 2, [1, 2, 3, 4], [1, 2]],
    [0, 100, [1, 2, 3, 4], [1, 2, 3, 4]],
    [1, 2, [1, 2, 3, 4], [2]],
    [-1, 2, [1, 2, 3, 4], []],
    [-1, -2, [1, 2, 3, 4], []],
    [-3, -1, [1, 2, 3, 4], [2, 3]],
    [0, 0, 'hello', ''],
    [0, 1, 'hello', 'h'],
    [0, 3, 'hello', 'hel'],
    [1, 3, 'hello', 'el'],
    [0, Infinity, 'hello', 'hello'],
    [0, 100, 'hello', 'hello'],
    [-3, -1, 'hello', 'll'],
    [6, 11, 'hello world', 'world']
  ]
  table.forEach(([from, to, val, expected]) => {
    assertEquals(
      slice(from, to, val),
      expected,
      `slice(${from}, ${to}, ${val}) -> ${expected}`
    )
  })

  assertEqual<never[]>(slice(0, 0, []))
  assertEqual<[]>(slice(0, 0, [] as []))
  assertEqual<readonly []>(slice(0, 0, [] as const))
  assertEqual<''>(slice(0, 0, ''))
  assertEqual<''>(slice(0, 0, '' as const))
})
