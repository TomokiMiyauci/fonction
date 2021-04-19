import { product } from '@/product'

describe('product', () => {
  const tableNumber: [number[], number][] = [
    [[], 0],
    [[0, 0], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 120],
    [[1, -2, 3, -4, 5], 120]
  ]

  it.each(tableNumber)('product(%s) -> %s', (val, expected) => {
    expect(product(val)).toBe(expected)
  })
  const tableBigint: [bigint[], bigint][] = [
    [[0n], 0n],
    [[1n], 1n],
    [[1n, 2n, 3n, 4n, 5n], 120n],
    [[1n, -2n, 3n, -4n, 5n], 120n]
  ]

  it.each(tableBigint)('product(%s) -> %s', (val, expected) => {
    expect(product(val)).toBe(expected)
  })
})
