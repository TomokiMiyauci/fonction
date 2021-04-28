import { keys } from '@/keys'

describe('keys', () => {
  const table: [Record<PropertyKey, unknown>, string[]][] = [
    [{}, []],
    [{ '': '' }, ['']],
    [{ '': undefined }, ['']],
    [{ '': null }, ['']],
    [{ '': 0 }, ['']],
    [{ a: 0 }, ['a']],
    [{ a: 0, b: 1 }, ['a', 'b']],
    [{ a: 0, b: 1, c: 2 }, ['a', 'b', 'c']],
    [{ 0: '' }, ['0']],
    [{ 0: '', 1: 'a' }, ['0', '1']],
    [{ '': {}, 1: [] }, ['1', '']]
  ]

  it.each(table)('keys(%s) -> %s', (val, expected) => {
    expect(keys(val)).toEqual(expected)
  })
})
