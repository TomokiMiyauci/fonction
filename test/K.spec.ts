import { K } from '@/K'

describe('K', () => {
  const table: [unknown][] = [
    [''],
    [{}],
    ['hello'],
    [() => 1],
    [[]],
    [undefined],
    [null]
  ]

  it.each(table)('K(%s) -> %s', (val) => {
    expect(K(val)()).toEqual(val)
  })
})
