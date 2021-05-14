// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../../dev_deps.ts'
import { propPath } from '../../src/_/propPath.ts'

Deno.test('propPath', () => {
  const table: [(string | number)[], Record<PropertyKey, unknown>, unknown][] =
    [
      [[''], {}, undefined],
      [[0], {}, undefined],
      [[0, 1], {}, undefined],
      [[0, 1, 'a', 'b'], { 0: 1 }, undefined],
      [[0, 'a', 'b'], { 0: [] }, undefined],
      [[''], { '': 'a' }, 'a'],
      [['a', 'b', 'c', 'd'], { a: { b: { c: { d: 'e' } } } }, 'e'],
      [
        ['a', 'b', 'c', 'd', 0, 0, 1],
        { a: { b: { c: { d: { 0: { 0: { 1: {} } } } } } } },
        {}
      ],
      [['a', 'b'], { a: { c: 'd' } }, undefined],
      [['a', 'b', 'c'], { a: { c: 'd' } }, undefined]
    ]
  table.forEach(([a, b, expected]) => {
    assertEquals(
      propPath(a, b),
      expected,
      `propPath(${a}, ${b}) -> ${expected}`
    )
  })
})
