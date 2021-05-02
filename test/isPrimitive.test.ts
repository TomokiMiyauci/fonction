import { assertEquals } from '../deps.ts'
import { isPrimitive } from '../src/isPrimitive.ts'
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

Deno.test('isPrimitive', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_STRING, true],
    ['test', true],
    [false, true],
    [true, true],
    [ZERO, true],
    [ONE, true],
    [BIG1, true],
    [SYMBOL, true],
    [null, true],
    [undefined, true],
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
      isPrimitive(val),
      expected,
      `isPrimitive(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
