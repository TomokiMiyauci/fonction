// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from '../dev_deps.ts'
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

  assertEqualsType<undefined>(head([]))
  assertEqualsType<undefined>(head([] as const))
  assertEqualsType<undefined>(head([] as []))
  assertEqualsType<string>(head(['']))
  assertEqualsType<''>(head([''] as const))
  assertEqualsType<''>(head([''] as ['']))
  assertEqualsType<string | undefined>(head([] as string[]))
  assertEqualsType<string | number>(head(['1', 2]))
  assertEqualsType<'1'>(head(['1', 2] as const))
  assertEqualsType<100>(
    head([100, 200, 'hello', []] as [100, 200, 'hello', []])
  )
  assertEqualsType<string>(head(''))
  assertEqualsType<string>(head('hello'))
  assertEqualsType<string>(head('hello' as const))
})

Deno.test('Head', () => {
  assertEqualsType<
    undefined,
    Head<[] | never[] | readonly [] | readonly never[]>
  >()
  assertEqualsType<'', Head<[''] | readonly ['']>>()
  assertEqualsType<string | undefined, Head<string[]>>()
  assertEqualsType<string | number | undefined, Head<string | number[]>>()
  assertEqualsType<100, Head<[100, 200, 'hello', []]>>()
  assertEqualsType<string, Head<string>>()
  assertEqualsType<'', Head<''>>()
  assertEqualsType<'h', Head<'hello'>>()
})
