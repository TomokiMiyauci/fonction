// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { isNumber } from '../src/isNumber.ts'
import { N } from '../src/N.ts'
import { pipe } from '../src/pipe.ts'
import { AnyFn } from '../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('pipe', () => {
  const table: [[AnyFn, AnyFn], unknown, unknown][] = [
    [[() => {}, () => {}], '', undefined],
    [[() => {}, () => true], '', true],
    [[() => {}, () => true], 1, true],
    [[() => 1, (n: number) => n + 1], 1, 2],
    [[isNumber, N], '', true],
    [[N, N], 1, true],
    [[isNumber, N], 1, false]
  ]

  table.forEach(([[fn1, fn2], argument, expected]) => {
    assertEquals(
      pipe(fn1, fn2)(argument),
      expected,
      `pipe(${fn1}, ${fn2})(${argument}) -> ${expected}`
    )
  })

  assertEqual<boolean>(pipe(isNumber, N)(1))
})
