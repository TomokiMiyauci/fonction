import { assertEquals } from '../deps.ts'
import { TrimRight, trimRight } from '../src/trimRight.ts'
import { assertEqual } from './asserts.ts'

Deno.test('trimRight', () => {
  const table: [string, string][] = [
    ['', ''],
    ['         ', ''],
    ['\n\n', ''],
    ['\t\t\t\t', ''],
    ['hello', 'hello'],
    [' hello', ' hello'],
    ['hello ', 'hello'],
    [' hello ', ' hello'],
    ['   hello   ', '   hello'],
    ['   hello  world  ', '   hello  world'],
    ['   hello  world\n\n', '   hello  world']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(trimRight(val), expected, `trimRight(${val}) -> ${expected}`)
  })
})

Deno.test('types', () => {
  assertEqual<'', TrimRight<''>>()
  assertEqual<'hello', TrimRight<'hello'>>()
  assertEqual<'', TrimRight<'\n'>>()
  assertEqual<'', TrimRight<'\t'>>()
  assertEqual<'', TrimRight<'\t\n '>>()
  assertEqual<'hello', TrimRight<'hello '>>()
  assertEqual<'\n\t hello', TrimRight<'\n\t hello\n\t '>>()
})
