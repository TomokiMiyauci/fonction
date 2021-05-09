// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../deps.ts'
import { ifElseFn } from '../src/ifElseFn.ts'
import { assertEqual } from './asserts.ts'

Deno.test('ifElseFn', () => {
  const table: [
    (val: any) => boolean,
    ((val: unknown) => boolean) | unknown,
    ((val: unknown) => boolean) | unknown,
    unknown,
    unknown
  ][] = [
    [() => true, 1, 0, 1, 1],
    [() => false, 1, 0, 1, 0],
    [(x: unknown) => !!x, 1, 0, 1, 1],
    [(x: unknown) => !!x, 1, 0, 0, 0],
    [(x: unknown) => !!x, () => 2, 0, 1, 2],
    [(x: unknown) => !!x, () => 2, () => 3, 0, 3],
    [(x: unknown) => !!x, (x: number) => x + 1, () => 3, 1, 2],
    [(x: unknown) => !!x, (x: number) => x + 1, (x: number) => x - 1, 0, -1]
  ]

  table.forEach(([condition, onTrue, onFalse, val, expected]) => {
    assertEquals(
      ifElseFn(condition, onTrue, onFalse)(val),
      expected,
      `ifElseFn(${condition}, ${onTrue}, ${onFalse})(${val}) -> ${expected}`
    )
  })

  assertEqual<number>(ifElseFn(() => true as const, 1, 0)(1))
  assertEqual<1>(ifElseFn(() => true as const, 1 as const, 0 as const)(1))
  assertEqual<0>(ifElseFn(() => false as const, 1 as const, 0 as const)(1))
  assertEqual<0>(ifElseFn(() => '' as const, 1 as const, 0 as const)(1))
  assertEqual<0>(ifElseFn(() => undefined, 1 as const, 0 as const)(1))
  assertEqual<0>(ifElseFn(() => null, 1 as const, 0 as const)(1))
  assertEqual<0>(ifElseFn(() => 0 as const, 1 as const, 0 as const)(1))
  assertEqual<1 | 0>(ifElseFn(() => true as boolean, 1 as const, 0 as const)(1))
  assertEqual<1 | 0>(ifElseFn((x: string) => !!x, 1 as const, 0 as const)(''))
  assertEqual<number>(
    ifElseFn(
      (x: number) => !!x,
      (x: number) => x + 1,
      0 as const
    )(0)
  )
  assertEqual<number>(
    ifElseFn(
      (x: number) => !!x,
      (x: number) => x + 1,
      (x: number) => x - 1
    )(0)
  )
})
