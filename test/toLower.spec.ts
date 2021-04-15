import { toLower } from '@/toLower'

describe('toLower', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'hello'],
    ['HeLlo', 'hello'],
    ['hello', 'hello'],
    ['Hello World', 'hello world']
  ]

  it.each(table)('toLower(%s) -> %s', (val, expected) => {
    expect(toLower(val)).toBe(expected)
  })
})
