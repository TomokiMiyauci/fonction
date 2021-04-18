import { upperCase } from '@/upperCase'

describe('upperCase', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'HELLO'],
    ['hello', 'HELLO'],
    ['Hello World', 'HELLO WORLD']
  ]

  it.each(table)('upperCase(%s) -> %s', (val, expected) => {
    expect(upperCase(val)).toBe(expected)
  })
})
