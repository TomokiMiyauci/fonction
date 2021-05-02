import { assertEquals } from '../deps.ts'
import { prepend } from '../src/prepend.ts'

Deno.test('prepend', () => {
  const table: [unknown, unknown[], unknown[]][] = [
    [null, [], [null]],
    [undefined, [], [undefined]],
    ['', [], ['']],
    [{}, [], [{}]],
    [0, [], [0]],
    ['a', ['b'], ['a', 'b']],
    ['a', ['b', 'c', 'd'], ['a', 'b', 'c', 'd']],
    [[], [], [[]]],
    [[1], [], [[1]]],
    [[1], [2], [[1], 2]],
    [[1], [2, 3, 4], [[1], 2, 3, 4]]
  ]
  table.forEach(([val, list, expected]) => {
    assertEquals(
      prepend(val, list),
      expected,
      `prepend(${val}, ${list}) -> ${expected}`
    )
  })
})
