// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/* eslint-disable @typescript-eslint/no-empty-function */
import { assertEquals } from '../dev_deps.ts'
import { isNumber } from '../src/isNumber.ts'
import { N } from '../src/N.ts'
import { pipe } from '../src/pipe.ts'
import { AnyFn } from '../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('pipe', () => {
  const table: [AnyFn[], unknown, unknown][] = [
    [[() => {}, () => {}], '', undefined],
    [[() => {}, () => true], '', true],
    [[() => {}, () => true], 1, true],
    [[() => 1, (n: number) => n + 1], 1, 2],
    [[isNumber, N], '', true],
    [[N, N], 1, true],
    [[isNumber, N], 1, false],
    [[() => true, () => false, () => true, () => false], 1, false]
  ]

  table.forEach(([[fn1, fn2], argument, expected]) => {
    assertEquals(
      pipe(fn1, fn2)(argument),
      expected,
      `pipe(${fn1}, ${fn2})(${argument}) -> ${expected}`
    )
  })

  assertEqual<boolean>(pipe(isNumber, N)(1))

  const pipetest = pipe(
    (_: number, __: string, ___: number) => {
      return 1 as const
    },
    (a) => a,
    () => [] as [],
    (a) => a,
    (a) => a,
    (a) => a,
    (_) => '' as const,
    (a) => a,
    (a) => a,
    (a) => a,
    (a) => a,
    (a) => a,
    (_) => 1 as const,
    (a) => a,
    (a) => a,
    (_) => '' as const,
    (a) => a
  )
  assertEqual<''>(pipetest(1, '', 1))
})
