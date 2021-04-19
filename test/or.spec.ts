import { or } from '@/or'

describe('or', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, true],
    [false, false, false]
  ]

  it.each(table)('or(%s, %s) -> %s', (a, b, expected) => {
    expect(or(a, b)).toBe(expected)
  })
})
