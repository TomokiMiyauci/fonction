import { and } from '@/and'

describe('and', () => {
  const table: [unknown, unknown, boolean][] = [
    [true, true, true],
    [false, true, false],
    [true, false, false],
    [false, false, false]
  ]

  it.each(table)('and(%s, %s) -> %s', (a, b, expected) => {
    expect(and(a, b)).toBe(expected)
  })
})
