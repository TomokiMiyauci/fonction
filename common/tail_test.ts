// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from '../dev_deps.ts'
import { Tail, tail } from './tail.ts'

Deno.test('tail', () => {
  const tableString: [string, string][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'b'],
    ['abc', 'bc']
  ]
  tableString.forEach(([val, expected]) => {
    assertEquals(tail(val), expected, `tail(${val}) -> ${expected}`)
  })

  const tableArray: [unknown[], unknown[]][] = [
    [[], []],
    [[''], []],
    [[undefined], []],
    [[null], []],
    [[0], []],
    [['', ''], ['']],
    [[0, 0], [0]],
    [[0, ''], ['']],
    [['hello', 'world'], ['world']],
    [
      ['hello', 'new', 'world'],
      ['new', 'world']
    ],
    [
      [undefined, null, 'hello', 'world'],
      [null, 'hello', 'world']
    ],
    [[['hello', 'world']], []]
  ]

  tableArray.forEach(([val, expected]) => {
    assertEquals(tail(val), expected, `tail(${val}) -> ${expected}`)
  })

  assertEqualsType<string, Tail<string>>()
  assertEqualsType<'', Tail<''>>()
  assertEqualsType<'', Tail<'a'>>()
  assertEqualsType<'b', Tail<'ab'>>()
  assertEqualsType<'bcdef', Tail<'abcdef'>>()
  assertEqualsType<[], Tail<[]>>()
  assertEqualsType<[], Tail<[1]>>()
  assertEqualsType<[], Tail<readonly [1]>>()
  assertEqualsType<[2], Tail<[1, 2]>>()
  assertEqualsType<[2, 3, 4, 5], Tail<[1, 2, 3, 4, 5]>>()
  assertEqualsType<[2, 3, 4, 5], Tail<readonly [1, 2, 3, 4, 5]>>()
  assertEqualsType<string[], Tail<string[]>>()
  assertEqualsType<readonly string[], Tail<readonly string[]>>()
})
