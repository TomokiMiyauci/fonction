// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../../dev_deps.ts'
import { curry2 } from '../../src/_/curry2.ts'

Deno.test('curry2', () => {
  const add = curry2((a: number, b: number) => a + b)
  assertEquals(add(1, 2), 3)
  assertEquals(add(1)(2), 3)
})
