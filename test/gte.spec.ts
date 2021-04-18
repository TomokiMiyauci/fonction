import { gte } from '@/gte'

describe('gte', () => {
  const table: [
    number | bigint | string,
    number | bigint | string,
    boolean
  ][] = [
    [0, 1, false],
    [0, 0, true],
    [1, 0, true],
    [0n, 1n, false],
    [0n, 0n, true],
    [1n, 0n, true],
    ['a', 'z', false],
    ['a', 'a', true],
    ['z', 'a', true],
    ['za', 'a', true]
  ]

  it.each(table)('gte(%s, %s) -> %s', (a, b, expected) => {
    expect(gte(a, b)).toBe(expected)
  })
})
