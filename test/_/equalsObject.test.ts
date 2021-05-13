// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { assertEquals } from '../../deps.ts'
import { equalsObject } from '../../src/_/equalsObject.ts'

Deno.test('equalsObject', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [
    { [k in PropertyKey]: unknown },
    { [k in PropertyKey]: unknown },
    boolean
  ][] = [
    // object pattern
    [{}, {}, true],
    [{ '': '' }, { '': '' }, true],
    [{ '': undefined }, { '': undefined }, true],
    [{ '': null }, { '': null }, true],
    [{ '': null, hoge: undefined }, { '': null }, false],
    [{ '': '' }, {}, false],
    [{ 1: '' }, {}, false],
    [{ 1: '' }, { 1: '' }, true],
    [{ 1: '' }, { 1: true }, false],
    [{ symbol: true }, { symbol: true }, true],
    [{ symbol: true }, { symbol: false }, false],
    [{ symbol: true, 1: 'hello' }, { symbol: true, 1: 'hello' }, true],
    [{ symbol: true, 1: 'hello' }, { symbol: true, 1: 'hello' }, true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(equalsObject(a, b), expected, `equalsObject() -> ${expected}`)
  })
})
