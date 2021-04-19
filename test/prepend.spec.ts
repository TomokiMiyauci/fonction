import { prepend } from '@/prepend'

describe('prepend', () => {
  const table: [unknown, unknown[], unknown[]][] = [
    [null, [], [null]],
    [undefined, [], [undefined]],
    ['', [], ['']],
    [{}, [], [{}]],
    [0, [], [0]],
    ['a', ['b'], ['a', 'b']],
    ['a', ['b', 'c', 'd'], ['a', 'b', 'c', 'd']],
    [[], [], [[]]],
    [[1], [], [[1]]],
    [[1], [2], [[1], 2]],
    [[1], [2, 3, 4], [[1], 2, 3, 4]]
  ]

  it.each(table)('prepend(%s, %s) -> %s', (val, list, expected) => {
    expect(prepend(val, list)).toEqual(expected)
  })
})
