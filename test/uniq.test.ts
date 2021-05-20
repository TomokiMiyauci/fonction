// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { uniq } from '../src/uniq.ts'
import { assertEqual } from './asserts.ts'

Deno.test('uniq', () => {
  const table: [unknown[], unknown[]][] = [
    [[], []],
    [
      ['', '', '', '', '', 2, '', 1],
      ['', 2, 1]
    ],
    [
      [null, undefined, 1n, null, undefined, 2n],
      [null, undefined, 1n, 2n]
    ],
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 1, 2, 2, 3, 3],
      [1, 2, 3]
    ],
    [[{}, {}, {}], [{}]],
    [
      [[], {}, [], {}],
      [[], {}]
    ],
    [
      [[], {}, [], {}],
      [[], {}]
    ],
    [
      [[1, 2, 3], { hoge: 'huga' }, [], { hage: 'hoge' }],
      [[1, 2, 3], { hoge: 'huga' }, [], { hage: 'hoge' }]
    ],
    [
      [
        [1, [], [1, [2, [3]]]],
        { hoge: 'huga', 1: 0 },
        [1, [], [1, [2, [3]]]],
        { hoge: 'huga', 1: 0, 2: 3 }
      ],
      [
        [1, [], [1, [2, [3]]]],
        { hoge: 'huga', 1: 0 },
        { hoge: 'huga', 1: 0, 2: 3 }
      ]
    ]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(uniq(val), expected, `uniq(${val}) -> ${expected}`)
  })

  assertEqual<never[]>(uniq([]))
  assertEqual<string[]>(uniq(['']))
  assertEqual<''[]>(uniq([''] as const))
  assertEqual<('' | '1' | '2')[]>(uniq(['', '1', '2'] as const))
  assertEqual<('' | '1' | '2')[]>(uniq(['', '1', '2', '1', '2'] as const))
})
