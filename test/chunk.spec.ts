import { chunk } from '@/chunk'

describe('chunk', () => {
  const arr = ['a', 'b', 'c', 'd']
  const arr2 = [{}, [], 0, null, undefined]
  const table: [number, unknown[], unknown[][] | unknown[]][] = [
    [1, [], []],
    [0, [], []],
    [2, [], []],
    [1, [''], [['']]],
    [2, [''], [['']]],
    [3, [''], [['']]],
    [4, [''], [['']]],
    [0, [''], ['']],
    [-0, [''], ['']],
    [-1, [''], ['']],
    [-2, [''], ['']],
    [-3, [''], ['']],
    [-4, [''], ['']],
    [1, arr, [['a'], ['b'], ['c'], ['d']]],
    [
      2,
      arr,
      [
        ['a', 'b'],
        ['c', 'd']
      ]
    ],
    [3, arr, [['a', 'b', 'c'], ['d']]],
    [4, arr, [['a', 'b', 'c', 'd']]],
    [5, arr, [['a', 'b', 'c', 'd']]],
    [6, arr, [['a', 'b', 'c', 'd']]],
    [1, arr2, [[{}], [[]], [0], [null], [undefined]]],
    [2, arr2, [[{}, []], [0, null], [undefined]]],
    [
      3,
      arr2,
      [
        [{}, [], 0],
        [null, undefined]
      ]
    ],
    [4, arr2, [[{}, [], 0, null], [undefined]]],
    [5, arr2, [[{}, [], 0, null, undefined]]],
    [6, arr2, [[{}, [], 0, null, undefined]]]
  ]

  it.each(table)('chunk(%d, %s) -> %s', (a, b, expected) => {
    expect(chunk(a, b)).toEqual(expected)
  })
})
