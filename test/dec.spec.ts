import { dec } from '@/dec'

describe('dec', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [number | bigint | any, number | bigint][] = [
    [0, -1],
    [-10, -11],
    [10, 9],
    [0n, -1n],
    [-10n, -11n],
    [10n, 9n]
  ]

  it.each(table)('dec(%d) -> %d', (val, expected) => {
    expect(dec(val)).toBe(expected)
  })
})
