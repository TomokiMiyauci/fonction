import { not } from '@/not'

describe('not', () => {
  const table: [unknown, boolean][] = [
    ['', true],
    [undefined, true],
    [null, true],
    [0, true],
    [NaN, true],
    [false, true],
    [[], false],
    [{}, false],
    ['hello', false],
    [Infinity, false],
    [1, false],
    [-1, false],
    [true, false]
  ]

  it.each(table)('not(%s) -> %s', (val, expected) => {
    expect(not(val)).toBe(expected)
  })
})
