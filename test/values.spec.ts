import { values } from '@/values'

describe('values', () => {
  const table: [Record<PropertyKey, unknown> | ArrayLike<any>, any[]][] = [
    [{}, []],
    [{ '': '' }, ['']],
    [{ '': undefined }, [undefined]],
    [{ '': null }, [null]],
    [{ '': 0 }, [0]],
    [{ a: 0 }, [0]],
    [{ a: 0, b: 1 }, [0, 1]],
    [{ a: 0, b: 1, c: 2 }, [0, 1, 2]],
    [{ 0: '' }, ['']],
    [{ 0: '', 1: 'a' }, ['', 'a']],
    [{ '': {}, 1: [] }, [[], {}]],
    [[], []],
    [[''], ['']],
    [[0], [0]],
    [[null], [null]],
    [[undefined], [undefined]],
    [
      ['hello', 'world'],
      ['hello', 'world']
    ]
  ]

  it.each(table)('values(%s) -> %s', (val, expected) => {
    expect(values(val)).toEqual(expected)
  })
})
