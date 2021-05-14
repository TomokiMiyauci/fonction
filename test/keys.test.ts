// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { keys } from '../src/keys.ts'

Deno.test('keys', () => {
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
  table.forEach(([val, expected]) => {
    assertEquals(keys(val), expected, `keys(${val}) -> ${expected}`)
  })
})
