import { hasPath } from '@/_/hasPath'

describe('hasPath', () => {
  const table: [
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

  it.each(table)('hasPath(%s, %s) -> %s', (a, b, expected) => {
    expect(hasPath(a, b)).toBe(expected)
  })
})
