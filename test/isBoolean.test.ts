import { assertEquals } from '../deps.ts'
import { isBoolean } from '../src/isBoolean.ts'
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

Deno.test('isBoolean', () => {
  const table: [unknown, boolean][] = [
    [false, true],
    [true, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
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
      isBoolean(val),
      expected,
      `isBoolean(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
