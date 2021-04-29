import { assertEquals } from '../deps.ts'
import { isString } from '../src/isString.ts'
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

Deno.test('isString', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_STRING, true],
    ['test', true],
    [false, false],
    [true, false],
    [ZERO, false],
    [ONE, false],
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
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isString(val),
      expected,
      `isString(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
