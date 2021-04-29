import { prop } from '@/_/prop'

describe('prop', () => {
  const table: [string | number, Record<PropertyKey, unknown>, unknown][] = [
    ['', {}, undefined],
    ['', { ' ': '' }, undefined],
    ['', { ' ': { '': '' } }, undefined],
    [0, {}, undefined],
    [0, { 1: '' }, undefined],
    [0, { 1: { 0: '' } }, undefined],
    ['', { '': '' }, ''],
    ['Hello', { hello: '' }, undefined],
    ['Hello', { Hello: '' }, ''],
    ['hello', { hello: '' }, ''],
    [0, { 0: 1 }, 1]
  ]

  it.each(table)('prop(%s, %s) -> %s', (a, b, expected) => {
    expect(prop(a, b)).toBe(expected)
  })
})
