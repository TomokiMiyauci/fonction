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

import { isArray } from '@/isArray'
describe('isArray', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_ARRAY, true],
    [[[]], true],
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
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]

  it.each(table)('isArray(%s) -> %s', (val, expected) => {
    expect(isArray(val)).toEqual(expected)
  })
})
