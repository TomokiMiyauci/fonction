// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { isNaN } from '../src/isNaN.ts'
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

Deno.test('isNaN', () => {
  const table: [unknown, boolean][] = [
    [NaN, true],
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
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
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
      isNaN(val),
      expected,
      `isNaN(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
