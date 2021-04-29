import { assertEquals } from '../deps.ts'
import { or } from '../src/or.ts'

Deno.test('or', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, true],
    [false, false, false]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(or(a, b), expected, `or(${a}, ${b}) -> ${expected}`)
  })
})
