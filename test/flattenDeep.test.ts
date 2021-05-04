// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { FlattenDeep as Flat, flattenDeep } from '../src/flattenDeep.ts'
import { assertEqual } from './asserts.ts'
Deno.test('flattenDeep', () => {
  const table: [unknown[], unknown[]][] = [
    [[], []],
    [[null], [null]],
    [
      [null, undefined, 1, 'hello'],
      [null, undefined, 1, 'hello']
    ],
    [[[]], []],
    [[[1]], [1]],
    [[[1, 2, 3]], [1, 2, 3]],
    [[[1, 2, 3, undefined, null]], [1, 2, 3, undefined, null]],
    [
      [[1, 2, 3, undefined, null], 4, 5, 6],
      [1, 2, 3, undefined, null, 4, 5, 6]
    ],
    [
      [
        [1, 2, 3, undefined, null],
        [4, 5, 6]
      ],
      [1, 2, 3, undefined, null, 4, 5, 6]
    ],
    [
      [[1, 2, 3, undefined, ['hello', 4], null]],
      [1, 2, 3, undefined, 'hello', 4, null]
    ],
    [
      [
        '',
        [1, 2, 3, undefined, ['hello', 4], null],
        [5, 6, ['world']],
        [[7, 8], 9]
      ],
      ['', 1, 2, 3, undefined, 'hello', 4, null, 5, 6, 'world', 7, 8, 9]
    ]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      flattenDeep(val),
      expected,
      `flattenDeep(${val}) -> ${expected}`
    )
  })
})

Deno.test('types', () => {
  assertEqual<[], Flat<[]>>()
  assertEqual<never[], Flat<never[]>>()
  // TODO: Success this case
  // assertEqual<never[], Flat<never[][]>>()
  assertEqual<[''], Flat<['']>>()
  assertEqual<[number], Flat<[number]>>()
  assertEqual<[number, string], Flat<[number, string]>>()
  assertEqual<number[], Flat<number[]>>()
  assertEqual<(number | string)[], Flat<(number | string)[]>>()
  assertEqual<readonly [''], Flat<readonly ['']>>()
  assertEqual<readonly ['', 'hello'], Flat<readonly ['', 'hello']>>()
  assertEqual<readonly ['', ''], Flat<readonly ['', readonly ['']]>>()
  assertEqual<
    readonly ['', '', 'hello'],
    Flat<readonly ['', readonly ['', readonly ['hello']]]>
  >()
})
