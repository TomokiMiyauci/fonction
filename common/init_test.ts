// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from '../dev_deps.ts'
import { Init, init } from './init.ts'

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

  assertEqualsType<[], Init<[]>>()
  assertEqualsType<readonly [], Init<readonly []>>()
  assertEqualsType<[], Init<[1]>>()
  assertEqualsType<[1], Init<[1, 2]>>()
  assertEqualsType<[1, 2], Init<[1, 2, 3]>>()
  assertEqualsType<'', Init<''>>()
  assertEqualsType<'', Init<'a'>>()
  assertEqualsType<'a', Init<'ab'>>()
  assertEqualsType<'abcde', Init<'abcdef'>>()
})
