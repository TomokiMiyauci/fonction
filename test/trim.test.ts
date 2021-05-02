import { assertEquals } from '../deps.ts'
import { trim } from '../src/trim.ts'

Deno.test('trim', () => {
  const table: [string, string][] = [
    ['', ''],
    ['hello', 'hello'],
    [' hello', 'hello'],
    ['hello ', 'hello'],
    [' hello ', 'hello'],
    ['   hello   ', 'hello'],
    ['   hello  world  ', 'hello  world']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(trim(val), expected, `trim(${val}) -> ${expected}`)
  })
})
