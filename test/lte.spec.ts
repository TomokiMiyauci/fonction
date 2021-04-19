import { lte } from '@/lte'
import { Ord } from '@/types'

describe('lte', () => {
  const table: [Ord, Ord, boolean][] = [
    [1, 0, false],
    [0, 0, true],
    [0, 1, true],
    [1n, 0n, false],
    [0n, 0n, true],
    [0n, 1n, true],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'a', true],
    ['a', 'z', true],
    [true, false, false],
    [true, true, true],
    [false, false, true],
    [false, true, true],
    [new Date('2000/1/2'), new Date('2000/1/1'), false],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), true],
    [new Date('1999/12/31'), new Date('2000/1/1'), true]
  ]

  it.each(table)('lte(%s, %s) -> %s', (a, b, expected) => {
    expect(lte(a, b)).toBe(expected)
  })
})
