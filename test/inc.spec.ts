import { inc } from '@/inc'

describe('inc', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [number | bigint | any, number | bigint][] = [
    [0, 1],
    [-10, -9],
    [10, 11],
    [0n, 1n],
    [-10n, -9n],
    [10n, 11n]
  ]

  it.each(table)('inc(%d) -> %d', (val, expected) => {
    expect(inc(val)).toBe(expected)
  })
})
