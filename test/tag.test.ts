// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { tap } from '../src/tap.ts'
import { Arity1Fn } from '../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('tap', () => {
  const table: [Arity1Fn, unknown][] = [
    [console.log, 'hello'],
    [() => console.log(1), ''],
    [(a: string) => console.log(a), ''],
    [(a: unknown[]) => console.log(a), ['hello', 'world']]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(tap(val)(expected), expected, `tap(${val}) -> ${expected}`)
  })

  assertEqual<''>(tap(console.log)(''))
  assertEqual<''>(tap((_: string) => true)(''))
  assertEqual<''>(tap(() => true)(''))
  assertEqual<string[]>(tap((val: unknown[]) => val)(['hello']))
  assertEqual<string[]>(tap((val: unknown[]) => val)(['hello']))
  assertEqual<readonly ['hello']>(
    tap((val: readonly unknown[]) => val)(['hello'] as const)
  )
})
