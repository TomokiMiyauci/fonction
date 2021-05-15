// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { append } from '../src/append.ts'

Deno.test('append', () => {
  const table: [unknown, unknown[], unknown[]][] = [
    [null, [], [null]],
    [undefined, [], [undefined]],
    ['', [], ['']],
    [{}, [], [{}]],
    [0, [], [0]],
    ['a', ['b'], ['b', 'a']],
    ['a', ['b', 'c', 'd'], ['b', 'c', 'd', 'a']],
    [[], [], [[]]],
    [[1], [], [[1]]],
    [[1], [2], [2, [1]]],
    [[1], [2, 3, 4], [2, 3, 4, [1]]]
  ]

  table.forEach(([val, list, expected]) => {
    assertEquals(
      append(val, list),
      expected,
      `append(${val}, ${list}) -> ${expected}`
    )
  })
})
