// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { Replace, replace } from '../src/replace.ts'
import { assertEqual } from './asserts.ts'

Deno.test('replace', () => {
  const table: [string, string, string, string][] = [
    ['', '', '', ''],
    ['hello', 'hello', '', ''],
    ['hoge', 'huga', '', ''],
    [' ', 'a', ' ', 'a'],
    [' ', 'a', '  ', 'a '],
    ['a', 'b', 'a', 'b'],
    ['a', 'b', 'aaa', 'baa'],
    ['Tom', 'Bob', 'hello Tom', 'hello Bob']
  ]
  table.forEach(([val, from, to, expected]) => {
    assertEquals(
      replace(val, from, to),
      expected,
      `replace(${val}, ${from}, ${to}) -> ${expected}`
    )
  })
})

Deno.test('types', () => {
  assertEqual<'', Replace<'', '', ''>>()
  assertEqual<'', Replace<'', 'a', 'a'>>()
  assertEqual<'a', Replace<'a', 'a', 'a'>>()
  assertEqual<'b', Replace<'a', 'a', 'b'>>()
  assertEqual<'baa', Replace<'aaa', 'a', 'b'>>()
  assertEqual<'hello Bob', Replace<'hello Tom', 'Tom', 'Bob'>>()
})
