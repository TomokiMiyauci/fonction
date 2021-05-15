// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { chunk } from '../src/chunk.ts'
import { assertEqual } from './asserts.ts'

Deno.test('chunk', () => {
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

  table.forEach(([a, b, expected]) => {
    assertEquals(chunk(a, b), expected, `chunk(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<never[]>(chunk(0, []))
  assertEqual<[]>(chunk(0, [] as []))
  assertEqual<readonly []>(chunk(0, [] as const))
  assertEqual<[]>(chunk(1, [] as []))
  assertEqual<string[]>(chunk(-1, ['']))
  assertEqual<string[]>(chunk(-0, ['']))
  assertEqual<string[]>(chunk(0, ['']))
  assertEqual<string[][]>(chunk(1, ['']))
  assertEqual<string[][]>(chunk(2, ['']))
  assertEqual<string[][]>(chunk(3, ['']))
  assertEqual<string[][]>(chunk(4, ['']))
  assertEqual<''[][]>(chunk(1, [''] as const))
  assertEqual<readonly ['a', 'b', 'c', 'd']>(
    chunk(-4, ['a', 'b', 'c', 'd'] as const)
  )
  assertEqual<readonly ['a', 'b', 'c', 'd']>(
    chunk(0, ['a', 'b', 'c', 'd'] as const)
  )
  // TODO: Implement more rigorous type inference
  // assertEqual<[['a'], ['b'], ['c'], ['d']]>(
  //   chunk(1, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
  // assertEqual<[['a', 'b'], ['c', 'd']]>(
  //   chunk(2, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
  // assertEqual<[['a', 'b', 'c'], ['d']]>(
  //   chunk(3, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
  // assertEqual<[['a', 'b', 'c', 'd']]>(
  //   chunk(4, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
})
