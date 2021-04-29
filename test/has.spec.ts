import { has } from '@/has'

describe('has', () => {
  const tablePrimitive: [
    string | number,
    Record<PropertyKey, unknown>,
    boolean
  ][] = [
    ['', {}, false],
    ['', { ' ': '' }, false],
    ['', { ' ': { '': '' } }, false],
    [0, {}, false],
    [0, { 1: '' }, false],
    [0, { 1: { 0: '' } }, false],
    ['', { '': '' }, true],
    ['Hello', { hello: '' }, false],
    ['Hello', { Hello: '' }, true],
    ['hello', { hello: '' }, true],
    [0, { 0: 1 }, true]
  ]

  it.each(tablePrimitive)('has(%s, %s) -> %s', (a, b, expected) => {
    expect(has(a, b)).toBe(expected)
  })

  const tableArray: [
    (string | number)[],
    Record<PropertyKey, unknown>,
    boolean
  ][] = [
    [[], {}, false],
    [[], { '': '' }, false],
    [[0], {}, false],
    [[0], { '': '' }, false],
    [[0], { 0: '' }, true],
    [[0, 0], { 0: { 0: 1 } }, true],
    [[0, 'a'], { 0: { 0: 'b' } }, false],
    [[0, 'a'], { 0: { a: 'b' } }, true],
    [[''], {}, false],
    [[''], { ' ': '' }, false],
    [['a', 'b'], { a: '' }, false],
    [['a', 'b'], { a: { c: '' } }, false],
    [
      ['a', 'b'],
      {
        a: {
          a: ''
        }
      },
      false
    ],
    [['a'], { a: '' }, true],
    [['a'], { a: {} }, true],
    [['a', 'b'], { a: { b: '' } }, true],
    [['a', 'b'], { a: { b: {} } }, true],
    [['a', 'b', 'c'], { a: { b: { c: '' } } }, true],
    [[0, 'a', 'B'], { 0: { a: { B: 'c' } } }, true]
  ]

  it.each(tableArray)('has(%s, %s) -> %s', (a, b, expected) => {
    expect(has(a, b)).toBe(expected)
  })
})
