import { F } from '@/F'

describe('F', () => {
  const table: unknown[] = [
    [''],
    [1, 2, 3],
    [{}, [], undefined, null],
    [undefined],
    [null]
  ]

  it.each(table)('F(%s) -> false', (val) => {
    expect(F(val)).toBe(false)
  })
})
