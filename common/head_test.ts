// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { assertEqual } from '../test/asserts.ts'
import { Head, head } from './head.ts'
Deno.test('head', () => {
  const table: [string | unknown[], string | undefined | unknown][] = [
    ['', ''],
    ['a', 'a'],
    [' ab', ' '],
    ['abcd', 'a'],
    ['abcde ', 'a'],
    ['abcd_', 'a'],
    [[], undefined],
    [[''], ''],
    [['hello', 'world'], 'hello'],
    [['hello', 'new', 'world'], 'hello'],
    [
      [['hello', 'new', 'world'], 'test'],
      ['hello', 'new', 'world']
    ],
    [
      [
        ['hello', 'new', 'world'],
        ['hello2', 'world']
      ],
      ['hello', 'new', 'world']
    ],
    [[0], 0],
    [[0, 3, 6, 9], 0],
    [[{}], {}]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(head(val), expected, `head(${val}) -> ${expected}`)
  })

  assertEqual<undefined>(head([]))
  assertEqual<undefined>(head([] as const))
  assertEqual<undefined>(head([] as []))
  assertEqual<string>(head(['']))
  assertEqual<''>(head([''] as const))
  assertEqual<''>(head([''] as ['']))
  assertEqual<string | undefined>(head([] as string[]))
  assertEqual<string | number>(head(['1', 2]))
  assertEqual<'1'>(head(['1', 2] as const))
  assertEqual<100>(head([100, 200, 'hello', []] as [100, 200, 'hello', []]))
  assertEqual<string>(head(''))
  assertEqual<string>(head('hello'))
  assertEqual<string>(head('hello' as const))
})

Deno.test('head', () => {
  assertEqual<undefined, Head<[] | never[] | readonly [] | readonly never[]>>()
  assertEqual<'', Head<[''] | readonly ['']>>()
  assertEqual<string | undefined, Head<string[]>>()
  assertEqual<string | number | undefined, Head<string | number[]>>()
  assertEqual<100, Head<[100, 200, 'hello', []]>>()
  assertEqual<string, Head<string>>()
  assertEqual<'', Head<''>>()
  assertEqual<'h', Head<'hello'>>()
})
