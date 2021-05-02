import { assertEquals } from '../deps.ts'
import { or } from '../src/or.ts'
import { Falsy } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('or', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, true],
    [false, false, false]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(or(a, b), expected, `or(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<false>(or(false as Falsy, false as Falsy))
  assertEqual<boolean>(or(Boolean, Boolean))

  // Because Truthy can not define.
  assertEqual<boolean>(or(true as const, true as const))
  assertEqual<boolean>(or(true as const, Boolean))
  assertEqual<boolean>(or(Boolean, true as const))
})
