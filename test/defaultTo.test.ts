import { assertEquals } from '../deps.ts'
import { defaultTo } from '../src/defaultTo.ts'

Deno.test('defaultTo', () => {
  const defaultValue = 'hello'
  const table: [unknown, unknown, unknown][] = [
    [defaultValue, '', ''],
    [defaultValue, 'world', 'world'],
    [defaultValue, undefined, defaultValue],
    [defaultValue, null, defaultValue],
    [defaultValue, NaN, defaultValue],
    [defaultValue, NaN, defaultValue],
    [defaultValue, 0, 0],
    [defaultValue, {}, {}],
    [defaultValue, [], []]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(
      defaultTo(a)(b),
      expected,
      `defaultTo(${a}, ${b}) -> ${expected}`
    )
  })
})
