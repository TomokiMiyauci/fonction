import { append } from '@/append'

describe('append', () => {
  const table: [unknown, unknown[], unknown[]][] = [
    [null, [], [null]],
    [undefined, [], [undefined]],
    ['', [], ['']],
    [{}, [], [{}]],
    [0, [], [0]],
    ['a', ['b'], ['b', 'a']],
    ['a', ['b', 'c', 'd'], ['b', 'c', 'd', 'a']],
    [[], [], [[]]],
    [[1], [], [[1]]],
    [[1], [2], [2, [1]]],
    [[1], [2, 3, 4], [2, 3, 4, [1]]]
  ]

  it.each(table)('append(%s, %s) -> %s', (val, list, expected) => {
    expect(append(val, list)).toEqual(expected)
  })
})
