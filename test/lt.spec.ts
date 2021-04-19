import { lt } from '@/lt'
import { Ord } from '@/types'

describe('lt', () => {
  const table: [Ord, Ord, boolean][] = [
    [0, 0, false],
    [1, 0, false],
    [0, 1, true],
    [0n, 0n, false],
    [1n, 0n, false],
    [0n, 1n, true],
    ['a', 'a', false],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'z', true],
    [true, true, false],
    [false, false, false],
    [true, false, false],
    [false, true, true],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), false],
    [new Date('2000/1/2'), new Date('2000/1/1'), false],
    [new Date('1999/12/31'), new Date('2000/1/1'), true]
  ]

  it.each(table)('lt(%s, %s) -> %s', (a, b, expected) => {
    expect(lt(a, b)).toBe(expected)
  })
})
