// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { entries } from '../src/entries.ts'

Deno.test('entries', () => {
  const table: [Record<PropertyKey, unknown> | ArrayLike<any>, any[]][] = [
    [[], []],
    [{}, []],
    [[''], [['0', '']]],
    [{ a: 1 }, [['a', 1]]],
    [{ [Symbol('key')]: 1 }, []],
    [{ [Symbol('key')]: 1, key: 'value' }, [['key', 'value']]],
    [{ a: 'b' }, [['a', 'b']]],
    [
      { a: 'b', c: 'd', e: 'f' },
      [
        ['a', 'b'],
        ['c', 'd'],
        ['e', 'f']
      ]
    ],
    [
      { a: 'b', 1: 'z', 0: 10, z: 1 },
      [
        ['0', 10],
        ['1', 'z'],
        ['a', 'b'],
        ['z', 1]
      ]
    ],
    [{ 1: 1 }, [['1', 1]]]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(entries(val), expected, `entries(${val}) -> ${expected}`)
  })
})
