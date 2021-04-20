import { length } from '@/length'

describe('length', () => {
  const table: [unknown[] | string, number][] = [
    ['', 0],
    [' ', 1],
    ['  ', 2],
    ['a', 1],
    ['ab', 2],
    ['hello', 5],
    [[], 0],
    [[''], 1],
    [['', 0], 2],
    [['', 0, '1'], 3]
  ]

  it.each(table)('length(%s) -> %d', (val, expected) => {
    expect(length(val)).toBe(expected)
  })
})
