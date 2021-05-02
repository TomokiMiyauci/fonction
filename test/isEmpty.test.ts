import { assertEquals } from '../deps.ts'
import { isEmpty } from '../src/isEmpty.ts'
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

Deno.test('isEmpty', () => {
  const table: [unknown, boolean][] = [
    [BIG1, false],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, true],
    [EMPTY_OBJECT, true],
    [EMPTY_ARRAY, true],
    [MAP, false],
    [SET, false],
    ['test', false],
    [false, false],
    [true, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [{ nest: {} }, false],
    [[[]], false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isEmpty(val),
      expected,
      `isEmpty(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
