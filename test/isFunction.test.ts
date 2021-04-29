import { assertEquals } from '../deps.ts'
import { isFunction } from '../src/isFunction.ts'
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

Deno.test('isFunction', () => {
  const table: [unknown, boolean][] = [
    [VOID_FN, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(
      isFunction(val),
      expected,
      `isFunction(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
