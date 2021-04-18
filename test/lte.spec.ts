import { lte } from '@/lte'

describe('lte', () => {
  const table: [
    number | bigint | string,
    number | bigint | string,
    boolean
  ][] = [
    [1, 0, false],
    [0, 0, true],
    [0, 1, true],
    [1n, 0n, false],
    [0n, 0n, true],
    [0n, 1n, true],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'a', true],
    ['a', 'z', true]
  ]

  it.each(table)('lte(%s, %s) -> %s', (a, b, expected) => {
    expect(lte(a, b)).toBe(expected)
  })
})
