import { sum } from '@/sum'

describe('sum', () => {
  const tableNumber: [number[], number][] = [
    [[], 0],
    [[0, 0], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 15],
    [[1, -2, 3, -4, 5], 3]
  ]

  it.each(tableNumber)('sum(%s) -> %d', (val, expected) => {
    expect(sum(val)).toBe(expected)
  })

  const tableBigint: [bigint[], bigint][] = [
    [[0n, 0n], 0n],
    [[1n], 1n],
    [[1n, 2n, 3n, 4n, 5n], 15n],
    [[1n, -2n, 3n, -4n, 5n], 3n]
  ]

  it.each(tableBigint)('sum(%s) -> %d', (val, expected) => {
    expect(sum(val)).toBe(expected)
  })
})
