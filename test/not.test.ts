import { assertEquals } from '../deps.ts'
import { not } from '../src/not.ts'

Deno.test('not', () => {
  const table: [unknown, boolean][] = [
    ['', true],
    [undefined, true],
    [null, true],
    [0, true],
    [NaN, true],
    [false, true],
    [[], false],
    [{}, false],
    ['hello', false],
    [Infinity, false],
    [1, false],
    [-1, false],
    [true, false]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(not(val), expected, `not(${val}) -> ${expected}`)
  })
})
