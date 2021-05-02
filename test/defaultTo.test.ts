import { assertEquals } from '../deps.ts'
import { defaultTo } from '../src/defaultTo.ts'
import { assertEqual } from './asserts.ts'

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

  assertEqual<string>(defaultTo('')(undefined as undefined))
  assertEqual<string>(defaultTo('')(null as null))
  assertEqual<''>(defaultTo('' as const)(undefined))
  assertEqual<''>(defaultTo('' as const)(null))
  assertEqual<string | number>(defaultTo('')(100))
  assertEqual<string | number>(defaultTo('')(NaN))
  assertEqual<'' | number>(defaultTo('' as const)(NaN))
})
