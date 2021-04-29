import { assertEquals } from '../deps.ts'
import { startsWith } from '../src/startsWith.ts'

Deno.test('startsWith', () => {
  const table: [string, string, boolean][] = [
    ['', '', true],
    ['hello', 'hello world', true],
    ['H', 'hello', false],
    ['Hello', 'hello', false]
  ]
  table.forEach(([val, target, expected]) => {
    assertEquals(
      startsWith(val, target),
      expected,
      `startsWith(${val}, ${target}) -> ${expected}`
    )
  })
})
