import { defaultTo } from '@/defaultTo'

describe('defaultTo', () => {
  const defaultValue = 'hello'
  const table: [unknown, unknown, unknown][] = [
    [defaultValue, '', ''],
    [defaultValue, 'world', 'world'],
    [defaultValue, undefined, defaultValue],
    [defaultValue, null, defaultValue],
    [defaultValue, NaN, defaultValue],
    [defaultValue, NaN, defaultValue],
    [defaultValue, 0, 0],
    [defaultValue, {}, {}],
    [defaultValue, [], []]
  ]

  it.each(table)('defaultTo(%s, %s) -> %s', (a, b, expected) => {
    expect(defaultTo(a)(b)).toEqual(expected)
  })
})
