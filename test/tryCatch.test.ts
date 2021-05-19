// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { tryCatch } from '../src/tryCatch.ts'
import { AnyFn } from '../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('tryCatch', () => {
  const table: [AnyFn, unknown][] = [
    [() => true, true],
    [() => false, false],
    [
      () => {
        throw Error('hello')
      },
      Error('hello')
    ]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(tryCatch(val), expected, `tryCatch(${val}) -> ${expected}`)
  })

  const table2: [AnyFn, unknown | AnyFn, unknown][] = [
    [() => true, () => false, true],
    [() => true, false, true],
    [
      () => {
        throw Error('hello')
      },
      false,
      false
    ],
    [
      () => {
        throw Error('hello')
      },
      (e: Error) => e.message,
      'hello'
    ],
    [
      () => {
        throw Error('hello')
      },
      () => 1,
      1
    ]
  ]
  table2.forEach(([tryer, catcher, expected]) => {
    assertEquals(
      tryCatch(tryer, catcher),
      expected,
      `tryCatch(${tryer}, ${catcher}) -> ${expected}`
    )
  })

  assertEqual<unknown>(tryCatch(() => true))
  assertEqual<true | Error>(tryCatch<true, Error>(() => true))
  assertEqual<1 | Error>(tryCatch<1, Error>(() => 1))
  assertEqual<unknown>(
    tryCatch(() => {
      throw Error('hello')
    })
  )
  assertEqual<never | Error>(
    tryCatch<never, Error>(() => {
      throw Error('hello')
    })
  )
  assertEqual<0 | 1>(tryCatch(() => 1, 0))
  assertEqual<0 | 1>(
    tryCatch(
      () => 1,
      () => 0
    )
  )
  assertEqual<1 | Error>(
    tryCatch(
      () => 1,
      (e: Error) => e
    )
  )
  assertEqual<1 | string>(
    tryCatch(
      () => 1,
      (e: Error) => e.message
    )
  )
})
