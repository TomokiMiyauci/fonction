import { endsWith } from '@/endsWith'

describe('endsWith', () => {
  const table: [string, string, boolean][] = [
    ['', '', true],
    ['o', 'hello', true],
    ['world', 'hello world', true],
    ['O', 'hello', false],
    ['earth', 'hello world', false],
    ['Hello', 'hello', false]
  ]

  it.each(table)('endsWith(%s, %s) -> %s', (val, target, expected) => {
    expect(endsWith(val, target)).toBe(expected)
  })
})
