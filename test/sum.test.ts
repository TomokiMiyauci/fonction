// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { sum } from '../src/sum.ts'

Deno.test('sum', () => {
  const tableNumber: [number[], number][] = [
    [[], 0],
    [[0, 0], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 15],
    [[1, -2, 3, -4, 5], 3]
  ]
  tableNumber.forEach(([val, expected]) => {
    assertEquals(sum(val), expected, `sum(${val}) -> ${expected}`)
  })

  const tableBigint: [bigint[], bigint][] = [
    [[0n, 0n], 0n],
    [[1n], 1n],
    [[1n, 2n, 3n, 4n, 5n], 15n],
    [[1n, -2n, 3n, -4n, 5n], 3n]
  ]

  tableBigint.forEach(([val, expected]) => {
    assertEquals(sum(val), expected, `sum(${val}) -> ${expected}`)
  })
})
