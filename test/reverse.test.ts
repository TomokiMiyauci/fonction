import { assertEquals } from '../deps.ts'
import { reverse } from '../src/reverse.ts'

Deno.test('reverse', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [string | any, string | any][] = [
    ['', ''],
    ['a', 'a'],
    ['abc', 'cba'],
    ['acegik', 'kigeca'],
    [[], []],
    [[''], ['']],
    [
      ['', 'hello', 'world'],
      ['world', 'hello', '']
    ],
    [
      [0, 'hello', 'world'],
      ['world', 'hello', 0]
    ],
    [
      [0, {}, []],
      [[], {}, 0]
    ],
    [
      [['hello', 'world'], {}, []],
      [[], {}, ['hello', 'world']]
    ]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(reverse(val), expected, `reverse(${val}) -> ${expected}`)
  })
})
