import { T } from '@/T'

describe('T', () => {
  const table: unknown[] = [
    [''],
    [1, 2, 3],
    [{}, [], undefined, null],
    [undefined],
    [null]
  ]

  it.each(table)('T(%s) -> true', (val) => {
    expect(T(val)).toBe(true)
  })
})
