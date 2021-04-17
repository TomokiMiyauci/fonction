import { sum } from '@/sum'

describe('sum', () => {
  const table: [number[], number][] = [
    [[], 0],
    [[0, 0], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 15],
    [[1, -2, 3, -4, 5], 3]
  ]

  it.each(table)('sum(%s) -> %d', (val, expected) => {
    expect(sum(val)).toBe(expected)
  })
})
