// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { product } from '../src/product.ts'

Deno.test('product', () => {
  const tableNumber: [number[], number][] = [
    [[], 0],
    [[0, 0], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 120],
    [[1, -2, 3, -4, 5], 120]
  ]

  tableNumber.forEach(([val, expected]) => {
    assertEquals(product(val), expected, `product(${val}) -> ${expected}`)
  })

  const tableBigint: [bigint[], bigint][] = [
    [[0n], 0n],
    [[1n], 1n],
    [[1n, 2n, 3n, 4n, 5n], 120n],
    [[1n, -2n, 3n, -4n, 5n], 120n]
  ]

  tableBigint.forEach(([val, expected]) => {
    assertEquals(product(val), expected, `product(${val}) -> ${expected}`)
  })
})
