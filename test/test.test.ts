// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { test } from '../src/test.ts'

Deno.test('test', () => {
  const table: [RegExp, string, boolean][] = [
    [new RegExp('^test'), 'testdata', true],
    [/xyz$/, 'testxyz', true],
    [/.+/, '', false]
  ]

  table.forEach(([regExp, val, expected]) => {
    assertEquals(
      test(regExp, val),
      expected,
      `test(${regExp} ,${val})() -> ${expected}`
    )
  })
})
