// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { head } from '../src/head.ts'

Deno.test('head', () => {
  const tableString: [string, string][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'a'],
    ['abc', 'ab']
  ]
  tableString.forEach(([val, expected]) => {
    assertEquals(head(val), expected, `head(${val}) -> ${expected}`)
  })

  const tableArray: [unknown[], unknown[]][] = [
    [[], []],
    [[''], []],
    [[undefined], []],
    [[null], []],
    [[0], []],
    [['', ''], ['']],
    [[0, 0], [0]],
    [[0, ''], [0]],
    [['hello', 'world'], ['hello']],
    [
      ['hello', 'new', 'world'],
      ['hello', 'new']
    ],
    [
      [undefined, null, 'hello', 'world'],
      [undefined, null, 'hello']
    ],
    [[['hello', 'world']], []]
  ]

  tableArray.forEach(([val, expected]) => {
    assertEquals(head(val), expected, `head(${val}) -> ${expected}`)
  })
})
