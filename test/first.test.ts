import { assertEquals } from '../deps.ts'
import { first } from '../src/first.ts'

Deno.test('first', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [string | unknown[] | any, unknown][] = [
    ['', ''],
    ['a', 'a'],
    [' ab', ' '],
    ['abcd', 'a'],
    ['abcde ', 'a'],
    ['abcd_', 'a'],
    [[], undefined],
    [[''], ''],
    [['hello', 'world'], 'hello'],
    [['hello', 'new', 'world'], 'hello'],
    [
      [['hello', 'new', 'world'], 'test'],
      ['hello', 'new', 'world']
    ],
    [
      [
        ['hello', 'new', 'world'],
        ['hello2', 'world']
      ],
      ['hello', 'new', 'world']
    ],
    [[0], 0],
    [[0, 3, 6, 9], 0],
    [[{}], {}]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(first(val), expected, `first(${val}) -> ${expected}`)
  })
})
