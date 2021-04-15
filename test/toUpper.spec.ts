import { toUpper } from '@/toUpper'

describe('toUpper', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'HELLO'],
    ['hello', 'HELLO'],
    ['Hello World', 'HELLO WORLD']
  ]

  it.each(table)('toUpper(%s) -> %s', (val, expected) => {
    expect(toUpper(val)).toBe(expected)
  })
})
