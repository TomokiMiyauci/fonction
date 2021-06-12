// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { curry } from '../src/curry.ts'
import { assertEqual } from './asserts.ts'
const arity0 = () => true
const arity1 = (a: unknown) => a
const arity2 = (a: unknown, b: unknown) => [a, b]
const arity3 = (a: unknown, b: unknown, c: unknown) => [a, b, c]
const arity4 = (a: unknown, b: unknown, c: unknown, d: unknown) => [a, b, c, d]
const arity5 = (a: unknown, b: unknown, c: unknown, d: unknown, e: unknown) => [
  a,
  b,
  c,
  d,
  e
]

Deno.test('curry', () => {
  const add = curry((a: number, b: number) => a + b)
  assertEquals(add(1, 2), 3)
  assertEquals(add(1)(2), 3)

  assertEquals(curry(arity0)(), true)
  assertEquals(curry(arity1)(''), '')
  assertEquals(typeof curry(arity2)(''), 'function')
  assertEquals(curry(arity2)('', 1), ['', 1])
  assertEquals(curry(arity2)('')(1), ['', 1])

  assertEquals(typeof curry(arity3)(''), 'function')
  assertEquals(typeof curry(arity3)('')(1), 'function')
  assertEquals(curry(arity3)('')(1)(false), ['', 1, false])
  assertEquals(curry(arity3)('', 1)(false), ['', 1, false])
  assertEquals(curry(arity3)('', 1, false), ['', 1, false])

  assertEquals(curry(arity4)('')(1)(false)(true), ['', 1, false, true])
  assertEquals(curry(arity4)('', 1)(false)(true), ['', 1, false, true])
  assertEquals(curry(arity4)('', 1, false)(true), ['', 1, false, true])
  assertEquals(curry(arity4)('', 1, false, true), ['', 1, false, true])

  assertEquals(curry(arity5)('')(1)(false)(true)(0n), ['', 1, false, true, 0n])
  assertEquals(curry(arity5)('', 1)(false)(true)(0n), ['', 1, false, true, 0n])
  assertEquals(curry(arity5)('', 1, false)(true)(0n), ['', 1, false, true, 0n])
  assertEquals(curry(arity5)('', 1, false, true)(0n), ['', 1, false, true, 0n])
  assertEquals(curry(arity5)('', 1, false, true, 0n), ['', 1, false, true, 0n])
  assertEquals(curry(arity5)('')(1, false, true, 0n), ['', 1, false, true, 0n])
  assertEquals(curry(arity5)('')(1)(false, true, 0n), ['', 1, false, true, 0n])
  assertEquals(curry(arity5)('')(1)(false)(true, 0n), ['', 1, false, true, 0n])

  assertEqual<() => boolean>(curry(arity0))
  assertEqual<unknown>(curry(arity1)(''))
  assertEqual<unknown[]>(curry(arity2)('')(''))
  assertEqual<unknown[]>(curry(arity2)('', ''))
  assertEqual<unknown[]>(curry(arity3)('', '', ''))
  assertEqual<unknown[]>(curry(arity3)('', '', ''))
  assertEqual<unknown[]>(curry(arity3)('')('')(''))
  assertEqual<unknown[]>(
    curry(arityMax)(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    )
  )
})

const arityMax = (
  a: unknown,
  b: unknown,
  c: unknown,
  d: unknown,
  e: unknown,
  f: unknown,
  g: unknown,
  h: unknown,
  i: unknown,
  j: unknown,
  k: unknown,
  l: unknown,
  m: unknown,
  n: unknown,
  o: unknown,
  p: unknown,
  q: unknown
) => [a, b, c, d, e]
