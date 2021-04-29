import { assertEquals } from '../deps.ts'
import { T } from '../src/T.ts'

Deno.test('T', () => {
  const table: unknown[] = [
    [''],
    [1, 2, 3],
    [{}, [], undefined, null],
    [undefined],
    [null]
  ]
  table.forEach((val) => {
    assertEquals(T(val), true, `T(${val}) -> true`)
  })
})
