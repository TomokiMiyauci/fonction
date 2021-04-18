import { gt } from '@/gt'

describe('gt', () => {
  const table: [
    number | bigint | string,
    number | bigint | string,
    boolean
  ][] = [
    [0, 0, false],
    [0, 1, false],
    [1, 0, true],
    [0n, 0n, false],
    [0n, 1n, false],
    [1n, 0n, true],
    ['a', 'a', false],
    ['a', 'z', false],
    ['z', 'a', true],
    ['za', 'a', true]
  ]

  it.each(table)('gt(%s, %s) -> %s', (a, b, expected) => {
    expect(gt(a, b)).toBe(expected)
  })
})
