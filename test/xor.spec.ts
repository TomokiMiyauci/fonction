import { xor } from '@/xor'

describe('xor', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, false],
    [false, false, false]
  ]

  it.each(table)('xor(%s, %s) -> %s', (a, b, expected) => {
    expect(xor(a, b)).toBe(expected)
  })
})
