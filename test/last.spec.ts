import { last } from '@/last'

describe('last', () => {
  const table: [string | unknown[], unknown][] = [
    ['', ''],
    ['a', 'a'],
    [' ab', 'b'],
    ['abcd', 'd'],
    ['abcde ', ' '],
    ['abcd_', '_'],
    [[], undefined],
    [[''], ''],
    [['hello', 'world'], 'world'],
    [['hello', 'new', 'world'], 'world'],
    [[['hello', 'new', 'world'], 'test'], 'test'],
    [
      [
        ['hello', 'new', 'world'],
        ['hello2', 'world']
      ],
      ['hello2', 'world']
    ],
    [[0], 0],
    [[0, 3, 6, 9], 9],
    [[{}], {}]
  ]

  it.each(table)('last(%s) -> %s', (val, expected) => {
    expect(last(val)).toEqual(expected)
  })
})
