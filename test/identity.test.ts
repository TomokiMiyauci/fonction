import { assertEquals } from '../deps.ts'
import { identity } from '../src/identity.ts'

Deno.test('identity', () => {
  const table: [unknown, unknown][] = [
    ['', ''],
    [0, 0],
    [1n, 1n],
    [() => 1, () => 1],
    [{}, {}],
    [[], []]
  ]
  table.forEach(([val]) => {
    assertEquals(identity(val), val, `identity(${val}) -> ${val}`)
  })
})
