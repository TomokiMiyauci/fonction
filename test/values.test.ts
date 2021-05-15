// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { values } from '../src/values.ts'

Deno.test('values', () => {
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
  table.forEach(([val, expected]) => {
    assertEquals(values(val), expected, `values(${val}) -> ${expected}`)
  })
})
