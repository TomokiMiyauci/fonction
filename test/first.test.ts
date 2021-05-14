// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { First, first } from '../src/first.ts'
import { assertEqual } from './asserts.ts'
Deno.test('first', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [string | unknown[] | any, unknown][] = [
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
    assertEquals(first(val), expected, `first(${val}) -> ${expected}`)
  })

  assertEqual<undefined>(first([]))
  assertEqual<undefined>(first([] as const))
  assertEqual<undefined>(first([] as []))
  assertEqual<string>(first(['']))
  assertEqual<''>(first([''] as const))
  assertEqual<''>(first([''] as ['']))
  assertEqual<string | number>(first(['1', 2]))
  assertEqual<'1'>(first(['1', 2] as const))
  assertEqual<100>(first([100, 200, 'hello', []] as [100, 200, 'hello', []]))
  assertEqual<string>(first(''))
  assertEqual<string>(first('hello'))
  assertEqual<string>(first('hello' as const))
})

Deno.test('First', () => {
  assertEqual<undefined, First<[] | never[] | readonly [] | readonly never[]>>()
  assertEqual<'', First<[''] | readonly ['']>>()
  assertEqual<string, First<string[]>>()
  assertEqual<string | number, First<string | number[]>>()
  assertEqual<100, First<[100, 200, 'hello', []]>>()
  assertEqual<string, First<string>>()
  assertEqual<'', First<''>>()
  assertEqual<'h', First<'hello'>>()
})
