import { trim } from '@/trim'

describe('trim', () => {
  const table: [string, string][] = [
    ['', ''],
    ['hello', 'hello'],
    [' hello', 'hello'],
    ['hello ', 'hello'],
    [' hello ', 'hello'],
    ['   hello   ', 'hello'],
    ['   hello  world  ', 'hello  world']
  ]

  it.each(table)('trim(%s) -> %s', (val, expected) => {
    expect(trim(val)).toBe(expected)
  })
})
