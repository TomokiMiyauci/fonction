import { tail } from '@/tail'

describe('tail', () => {
  const tableString: [string, string][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'b'],
    ['abc', 'bc']
  ]

  it.each(tableString)('tail(%s) -> %s', (val, expected) => {
    expect(tail(val)).toEqual(expected)
  })

  const tableArray: [unknown[], unknown[]][] = [
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

  it.each(tableArray)('tail(%s) -> %s', (val, expected) => {
    expect(tail(val)).toEqual(expected)
  })
})
