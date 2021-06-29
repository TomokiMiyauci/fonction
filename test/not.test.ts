// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals, isString } from '../dev_deps.ts'
import { not } from '../src/not.ts'
import { AnyFn } from '../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('not', () => {
  const table: [AnyFn, unknown[], boolean][] = [
    [() => true, [false], false],
    [() => false, [false], true],
    [(a: string) => a, [''], true],
    [(a: string) => a, [''], true],
    [(a: number, b: number) => a + b, [-1, 1], true],
    [(a: number, b: number) => a + b, [1, 1], false],
    [(a: number, b: number) => a + b, [1, 1, 1], false],
    [isString, [1], true],
    [isString, [''], false]
  ]

  table.forEach(([val, args, expected]) => {
    assertEquals(
      not(val)(...args),
      expected,
      `not(${val})(${args}) -> ${expected}`
    )
  })

  assertEqual<() => boolean>(not(() => true))
  assertEqual<(arg: unknown) => boolean>(not(isString))
  assertEqual<(a: string, b: string) => boolean>(
    not((a: string, b: string) => a + b)
  )
  assertEqual<(...val: unknown[]) => boolean>(not(Array))
})
