import { assertEquals } from '../deps.ts'
import { dec } from '../src/dec.ts'

Deno.test('dec', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [number | bigint | any, number | bigint][] = [
    [0, -1],
    [-10, -11],
    [10, 9],
    [0n, -1n],
    [-10n, -11n],
    [10n, 9n]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(dec(val), expected, `dec(${val}) -> ${expected}`)
  })
})
