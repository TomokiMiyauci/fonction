// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { assertEqual } from '../test/asserts.ts'
import { Last, last } from './last.ts'

Deno.test('last', () => {
  const table: [string | unknown[], unknown][] = [
    ['', ''],
    ['a', 'a'],
    [' ab', 'b'],
    ['abcd', 'd'],
    ['abcde ', ' '],
    ['abcd_', '_'],
    [[], undefined],
    [[''], ''],
    [['hello', 'world'], 'world'],
    [['hello', 'new', 'world'], 'world'],
    [[['hello', 'new', 'world'], 'test'], 'test'],
    [
      [
        ['hello', 'new', 'world'],
        ['hello2', 'world']
      ],
      ['hello2', 'world']
    ],
    [[0], 0],
    [[0, 3, 6, 9], 9],
    [[{}], {}]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(last(val), expected, `last(${val}) -> ${expected}`)
  })

  assertEqual<undefined>(last([]))
  assertEqual<undefined>(last([] as const))
  assertEqual<undefined>(last([] as []))
  assertEqual<string>(last(['']))
  assertEqual<''>(last([''] as const))
  assertEqual<''>(last([''] as ['']))
  assertEqual<string | number>(last(['1', 2]))
  assertEqual<2>(last(['1', 2] as const))
  assertEqual<[]>(last([100, 200, 'hello', []] as [100, 200, 'hello', []]))
  assertEqual<string>(last(''))
  assertEqual<string>(last('hello'))
  assertEqual<string>(last('hello' as const))
})

Deno.test('Last', () => {
  assertEqual<undefined, Last<[] | never[] | readonly [] | readonly never[]>>()
  assertEqual<'', Last<[''] | readonly ['']>>()
  assertEqual<string | undefined, Last<string[]>>()
  assertEqual<string | number | undefined, Last<string | number[]>>()
  assertEqual<[], Last<[100, 200, 'hello', []]>>()
  assertEqual<string, Last<string>>()
  assertEqual<'', Last<''>>()
  assertEqual<'o', Last<'hello'>>()
})
