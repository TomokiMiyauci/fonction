import { gt } from '@/gt'
import { Ord } from '@/types'
describe('gt', () => {
  const table: [Ord, Ord, boolean][] = [
    [0, 0, false],
    [0, 1, false],
    [1, 0, true],
    [0n, 0n, false],
    [0n, 1n, false],
    [1n, 0n, true],
    ['a', 'a', false],
    ['a', 'z', false],
    ['z', 'a', true],
    ['za', 'a', true],
    [true, true, false],
    [false, true, false],
    [false, false, false],
    [true, false, true],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), false],
    [new Date('1999/12/31'), new Date('2000/1/1'), false],
    [new Date('2000/1/2'), new Date('2000/1/1'), true]
  ]

  it.each(table)('gt(%s, %s) -> %s', (a, b, expected) => {
    expect(gt(a, b)).toBe(expected)
  })
})
