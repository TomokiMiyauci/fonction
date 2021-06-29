// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { init } from '../src/init.ts'

Deno.test('init', () => {
  const tableString: [string, string][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'a'],
    ['abc', 'ab']
  ]
  tableString.forEach(([val, expected]) => {
    assertEquals(init(val), expected, `init(${val}) -> ${expected}`)
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
    assertEquals(init(val), expected, `init(${val}) -> ${expected}`)
  })
})
