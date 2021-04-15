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
} from '@test'

import { isObject } from '@/isObject'
describe('isObject', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_OBJECT, true],
    [{ nest: {} }, true],
    [EMPTY_ARRAY, true],
    [[[]], true],
    [MAP, true],
    [SET, true],
    [WEAK_MAP, true],
    [WEAK_SET, true],
    [VOID_FN, true],
    [VOID_PROMISE, true],
    [DATE, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false]
  ]

  it.each(table)('isObject(%s) -> %s', (val, expected) => {
    expect(isObject(val)).toEqual(expected)
  })
})
