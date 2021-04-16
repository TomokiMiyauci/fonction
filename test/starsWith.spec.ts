import { startsWith } from '@/startsWith'

describe('startsWith', () => {
  const table: [string, string, boolean][] = [
    ['', '', true],
    ['hello', 'hello world', true],
    ['H', 'hello', false],
    ['Hello', 'hello', false]
  ]

  it.each(table)('startsWith(%s, %s) -> %s', (val, target, expected) => {
    expect(startsWith(val, target)).toBe(expected)
  })
})
