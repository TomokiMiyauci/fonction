import { reverse } from '@/reverse'

describe('reverse', () => {
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

  it.each(table)('reverse(%s) -> %s', (val, expected) => {
    expect(reverse(val)).toEqual(expected)
  })
})
