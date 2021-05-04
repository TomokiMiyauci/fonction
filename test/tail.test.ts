// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { tail } from '../src/tail.ts'

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
})
