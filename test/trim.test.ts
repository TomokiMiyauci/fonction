// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { Trim, trim } from '../src/trim.ts'
import { assertEqual } from './asserts.ts'

Deno.test('trim', () => {
  const table: [string, string][] = [
    ['', ''],
    ['         ', ''],
    ['\n\n', ''],
    ['\t\t\t\t', ''],
    ['hello', 'hello'],
    [' hello', 'hello'],
    ['hello ', 'hello'],
    [' hello ', 'hello'],
    ['   hello   ', 'hello'],
    ['   hello  world  ', 'hello  world'],
    ['   hello  world\n\n', 'hello  world']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(trim(val), expected, `trim(${val}) -> ${expected}`)
  })
})

Deno.test('types', () => {
  assertEqual<'', Trim<''>>()
  assertEqual<'hello', Trim<'hello'>>()
  assertEqual<'', Trim<'\n'>>()
  assertEqual<'', Trim<'\t'>>()
  assertEqual<'', Trim<'\t\n '>>()
  assertEqual<'hello', Trim<'hello '>>()
  assertEqual<'hello', Trim<'\n\t hello\n\t '>>()
})
