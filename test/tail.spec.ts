import { tail } from '@/tail'

describe('tail', () => {
  const table: [string | unknown[], string | unknown[]][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'b'],
    ['abc', 'bc'],
    [[], []],
    [[''], []],
    [[undefined], []],
    [[null], []],
    [[0], []],
    [['', ''], ['']],
    [[0, 0], [0]],
    [[0, ''], ['']],
    [['hello', 'world'], ['world']],
    [
      ['hello', 'new', 'world'],
      ['new', 'world']
    ],
    [
      [undefined, null, 'hello', 'world'],
      [null, 'hello', 'world']
    ],
    [[['hello', 'world']], []]
  ]

  it.each(table)('tail(%s) -> %s', (val, expected) => {
    expect(tail(val)).toEqual(expected)
  })
})
