// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { isJSONObject } from '../src/isJSONObject.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isJSONObject', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_OBJECT, true],
    [Object(), true],
    [{ nest: {} }, true],
    [new Object(), true],
    [new Object({ hoge: 'huga' }), true],
    [new Object({ hoge: [], huga: {} }), true],
    [Object, false],
    [NaN, false],
    [Infinity, false],
    [-Infinity, false],
    [null, false],
    [undefined, false],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isJSONObject(val),
      expected,
      `isJSONObject(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
