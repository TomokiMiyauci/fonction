import { assertEquals } from '../deps.ts'
import { TrimLeft, trimLeft } from '../src/trimLeft.ts'
import { assertEqual } from './asserts.ts'

Deno.test('trimLeft', () => {
  const table: [string, string][] = [
    ['', ''],
    ['         ', ''],
    ['\n\n', ''],
    ['\t\t\t\t', ''],
    ['hello', 'hello'],
    [' hello', 'hello'],
    ['hello ', 'hello '],
    [' hello ', 'hello '],
    ['   hello   ', 'hello   '],
    ['   hello  world  ', 'hello  world  '],
    ['   hello  world\n\n', 'hello  world\n\n']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(trimLeft(val), expected, `trimLeft(${val}) -> ${expected}`)
  })
})

Deno.test('types', () => {
  assertEqual<'', TrimLeft<''>>()
  assertEqual<'hello', TrimLeft<'hello'>>()
  assertEqual<'', TrimLeft<'\n'>>()
  assertEqual<'', TrimLeft<'\t'>>()
  assertEqual<'', TrimLeft<'\t\n '>>()
  assertEqual<'hello ', TrimLeft<'hello '>>()
  assertEqual<'hello\n\t ', TrimLeft<'\n\t hello\n\t '>>()
})
