import { has } from '@/has'

describe('has', () => {
  const table: [string | number, Record<PropertyKey, unknown>, boolean][] = [
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

  it.each(table)('has(%s, %s) -> %s', (a, b, expected) => {
    expect(has(a, b)).toBe(expected)
  })
})
