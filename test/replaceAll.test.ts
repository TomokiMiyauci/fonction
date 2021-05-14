// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { ReplaceAll, replaceAll } from '../src/replaceAll.ts'
import { assertEqual } from './asserts.ts'

Deno.test('replaceAll', () => {
  const table: [string, string, string, string][] = [
    ['', '', '', ''],
    ['hello', 'hello', '', ''],
    ['hoge', 'huga', '', ''],
    [' ', 'a', ' ', 'a'],
    [' ', 'a', '  ', 'aa'],
    ['a', 'b', 'a', 'b'],
    ['a', 'b', 'aaa', 'bbb'],
    ['Tom', 'Bob', 'hello Tom', 'hello Bob']
  ]
  table.forEach(([val, from, to, expected]) => {
    assertEquals(
      replaceAll(val, from, to),
      expected,
      `replaceAll(${val}, ${from}, ${to}) -> ${expected}`
    )
  })
})

Deno.test('types', () => {
  assertEqual<'', ReplaceAll<'', '', ''>>()
  assertEqual<'', ReplaceAll<'', 'a', 'a'>>()
  assertEqual<'a', ReplaceAll<'a', 'a', 'a'>>()
  assertEqual<'b', ReplaceAll<'a', 'a', 'b'>>()
  assertEqual<'bbb', ReplaceAll<'aaa', 'a', 'b'>>()
  assertEqual<'hello Bob', ReplaceAll<'hello Tom', 'Tom', 'Bob'>>()
})
