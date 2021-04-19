import { gte } from '@/gte'
import { Ord } from '@/types'

describe('gte', () => {
  const table: [Ord, Ord, boolean][] = [
    [0, 1, false],
    [0, 0, true],
    [1, 0, true],
    [0n, 1n, false],
    [0n, 0n, true],
    [1n, 0n, true],
    ['a', 'z', false],
    ['a', 'a', true],
    ['z', 'a', true],
    ['za', 'a', true],
    [false, true, false],
    [false, false, true],
    [true, true, true],
    [true, false, true],
    [new Date('1999/12/31'), new Date('2000/1/1'), false],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), true],
    [new Date('2000/1/2'), new Date('2000/1/1'), true]
  ]

  it.each(table)('gte(%s, %s) -> %s', (a, b, expected) => {
    expect(gte(a, b)).toBe(expected)
  })
})
