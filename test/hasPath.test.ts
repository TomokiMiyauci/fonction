// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { hasPath } from '../src/hasPath.ts'

Deno.test('hasPath', () => {
  const table: [(string | number)[], Record<PropertyKey, unknown>, boolean][] =
    [
      [[], {}, false],
      [[], { '': '' }, false],
      [[0], {}, false],
      [[0], { '': '' }, false],
      [[0], { 0: '' }, true],
      [[0, 0], { 0: { 0: 1 } }, true],
      [[0, 'a'], { 0: { 0: 'b' } }, false],
      [[0, 'a'], { 0: { a: 'b' } }, true],
      [[''], {}, false],
      [[''], { ' ': '' }, false],
      [['a', 'b'], { a: '' }, false],
      [['a', 'b'], { a: { c: '' } }, false],
      [
        ['a', 'b'],
        {
          a: {
            a: ''
          }
        },
        false
      ],
      [['a'], { a: '' }, true],
      [['a'], { a: {} }, true],
      [['a', 'b'], { a: { b: '' } }, true],
      [['a', 'b'], { a: { b: {} } }, true],
      [['a', 'b', 'c'], { a: { b: { c: '' } } }, true],
      [[0, 'a', 'B'], { 0: { a: { B: 'c' } } }, true]
    ]
  table.forEach(([a, b, expected]) => {
    assertEquals(hasPath(a, b), expected, `hasPath(${a}, ${b}) -> ${expected}`)
  })
})
