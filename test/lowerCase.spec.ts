import { lowerCase } from '@/lowerCase'

describe('lowerCase', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'hello'],
    ['HeLlo', 'hello'],
    ['hello', 'hello'],
    ['Hello World', 'hello world']
  ]

  it.each(table)('lowerCase(%s) -> %s', (val, expected) => {
    expect(lowerCase(val)).toBe(expected)
  })
})
