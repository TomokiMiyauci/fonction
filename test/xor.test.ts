import { assertEquals } from '../deps.ts'
import { xor } from '../src/xor.ts'

Deno.test('xor', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, false],
    [false, false, false]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(xor(a, b), expected, `xor(${a}, ${b}) -> ${expected}`)
  })
})
