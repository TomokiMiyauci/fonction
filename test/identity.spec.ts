import { identity } from '@/identity'

describe('identity', () => {
  const table: [unknown, unknown][] = [
    ['', ''],
    [0, 0],
    [1n, 1n],
    [() => 1, () => 1],
    [{}, {}],
    [[], []]
  ]

  it.each(table)('identity(%s) -> %s', (val) => {
    expect(identity(val)).toEqual(val)
  })
})
