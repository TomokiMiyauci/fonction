import { lt } from '@/lt'

describe('lt', () => {
  const table: [
    number | bigint | string,
    number | bigint | string,
    boolean
  ][] = [
    [0, 0, false],
    [1, 0, false],
    [0, 1, true],
    [0n, 0n, false],
    [1n, 0n, false],
    [0n, 1n, true],
    ['a', 'a', false],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'z', true]
  ]

  it.each(table)('lt(%s, %s) -> %s', (a, b, expected) => {
    expect(lt(a, b)).toBe(expected)
  })
})
