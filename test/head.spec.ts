import { head } from '@/head'

describe('head', () => {
  const tableString: [string, string][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'a'],
    ['abc', 'ab']
  ]

  it.each(tableString)('head(%s) -> %s', (val, expected) => {
    expect(head(val)).toEqual(expected)
  })

  const tableArray: [unknown[], unknown[]][] = [
    [[], []],
    [[''], []],
    [[undefined], []],
    [[null], []],
    [[0], []],
    [['', ''], ['']],
    [[0, 0], [0]],
    [[0, ''], [0]],
    [['hello', 'world'], ['hello']],
    [
      ['hello', 'new', 'world'],
      ['hello', 'new']
    ],
    [
      [undefined, null, 'hello', 'world'],
      [undefined, null, 'hello']
    ],
    [[['hello', 'world']], []]
  ]

  it.each(tableArray)('head(%s) -> %s', (val, expected) => {
    expect(head(val)).toEqual(expected)
  })
})
