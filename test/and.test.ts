import { assertEquals } from '../deps.ts'
import { and } from '../src/and.ts'

Deno.test('and', () => {
  const table: [unknown, unknown, boolean][] = [
    [true, true, true],
    [false, true, false],
    [true, false, false],
    [false, false, false]
  ]

  table.forEach(([a, b, expected]) => {
    assertEquals(and(a, b), expected, `add(${a}, ${b}) -> ${expected}`)
  })
})
