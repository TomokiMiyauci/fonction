// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

import { assertEquals } from '../../deps.ts'
import { equalsArray } from '../../src/_/equalsArray.ts'

Deno.test('equalsArray', () => {
  const symbol = Symbol('symbol')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [unknown[], unknown[], boolean][] = [
    [[], [], true],
    [Array([]), Array([]), true],
    [Array([]), [[]], true],
    [Array(1), [[]], true],
    [Array(2), [[], []], true],
    [new Array([]), Array([]), true],
    [new Array(0), [], true],
    [[''], ['', 't'], false],
    [[[[[[[]]]]]], [[[[[[]]]]]], true],
    [[[[[[[]]]]]], [[[[[[true]]]]]], false],
    // number pattern
    [[1], [1], true],
    [[1, 2], [1], false],
    [[1, 2], [1, 2], true],
    [[1, 2, 3, 4], [1, 2, 3, 4], true],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], true],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 9, 8], false],
    [[1, [2]], [1, [2]], true],
    [[1, [2]], [1, [2]], true],
    [
      [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]],
      [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]],
      true
    ],
    [
      [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]],
      [1, [2, [3, [4, [5, [6, [6, [8, [9]]]]]]]]],
      false
    ],
    [
      [1, [2, [3, [4, [5, [6, [7, [8, [10, 9, 8]]]]]]]]],
      [1, [2, [3, [4, [5, [6, [6, [8, [10, 9, 7]]]]]]]]],
      false
    ],
    [[1], [0], false],
    // string pattern
    [[''], [''], true],
    [['', '', '', ''], ['', '', '', ''], true],
    [['', '', '', ''], ['', '', '', 'x'], false],
    [
      ['a', ['b', ['c', ['d', ['e', ['f', 'g']]]]]],
      ['a', ['b', ['c', ['d', ['e', ['f', 'g']]]]]],
      true
    ],
    // undefined pattern
    [[undefined], [undefined], true],
    [[undefined, undefined], [undefined], false],
    [
      Array(6).fill(undefined),
      [undefined, undefined, undefined, undefined, undefined, undefined],
      true
    ],
    [
      Array(6).fill(undefined),
      [undefined, undefined, undefined, undefined, undefined],
      false
    ],
    // null pattern
    [[null], [null], true],
    [Array(4), [null, null, null, null], true],
    [[[Array(4)]], [[[null, null, null, null]]], true],
    // symbol pattern
    [Array(4).fill(symbol), [symbol, symbol, symbol, symbol], true],
    [Array(4).fill(symbol), [symbol, symbol, Symbol('symbol'), symbol], false],
    [[Symbol('')], [Symbol('')], false],
    // boolean pattern
    [[true], [true], true],
    [[false], [false], true],
    [[false, true], [false, false], false],
    [Array(4).fill(true), [true, true, true, true], true],
    // object pattern
    [[{}], [{}], true],
    [[{}, {}, {}, {}], [{}, {}, {}, {}], true],
    [
      [
        {},
        {
          a: 1
        },
        {
          b: ''
        },
        {
          c: [
            {
              d: undefined
            },
            {
              e: []
            }
          ]
        }
      ],
      [
        {},
        {
          a: 1
        },
        {
          b: ''
        },
        {
          c: [
            {
              d: undefined
            },
            {
              e: []
            }
          ]
        }
      ],
      true
    ]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(equalsArray(a, b), expected, `equalsArray() -> ${expected}`)
  })
})
