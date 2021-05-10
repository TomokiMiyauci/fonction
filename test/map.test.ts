// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { assertEquals } from '../deps.ts'
import { map } from '../src/map.ts'
import { AnyFn } from '../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('map', () => {
  const tableArray: [AnyFn, unknown[], unknown[]][] = [
    [() => {}, [], []],
    [() => 1, [], []],
    [() => '', [], []],
    [() => {}, [''], [undefined]],
    [() => {}, ['', 1], [undefined, undefined]],
    [() => {}, ['', 1, {}], [undefined, undefined, undefined]],
    [() => 1, [[]], [1]],
    [() => 1, [[], [], 1, 0], [1, 1, 1, 1]]
  ]
  tableArray.forEach(([fn, array, expected]) => {
    assertEquals(
      map(fn, array),
      expected,
      `map(${fn}, ${array}) -> ${expected}`
    )
  })

  const tableObject: [
    AnyFn,
    Record<string, unknown>,
    Record<string, unknown>
  ][] = [
    [() => {}, {}, {}],
    [() => 1, {}, {}],
    [() => undefined, {}, {}],
    [() => {}, { '': '' }, { '': undefined }],
    [() => 1, { '': '' }, { '': 1 }],
    [() => '', { '': '' }, { '': '' }],
    [() => '', { '': '' }, { '': '' }],
    [() => '', { '': '' }, { '': '' }],
    [() => ({}), { '': '' }, { '': {} }],
    [() => ({}), { hoge: 'huga', hello: 'world' }, { hoge: {}, hello: {} }],
    [
      (val: string, key: string) => `${key}-${val}`,
      { hoge: 'huga', hello: 'world' },
      { hoge: 'hoge-huga', hello: 'hello-world' }
    ],
    [
      (_, __, obj) => obj,
      { hoge: 'huga', hello: 'world' },
      {
        hoge: { hoge: 'huga', hello: 'world' },
        hello: { hoge: 'huga', hello: 'world' }
      }
    ]
  ]
  tableObject.forEach(([fn, array, expected]) => {
    assertEquals(
      map(fn, array),
      expected,
      `map(${fn}, ${array}) -> ${expected}`
    )
  })

  assertEqual<[]>(map(() => {}, []))
  assertEqual<[]>(map(() => {}, [] as []))
  assertEqual<[]>(map(() => {}, [] as const))
  assertEqual<[]>(map(() => 1, []))
  assertEqual<1[]>(map(() => 1, ['']))
  assertEqual<1[]>(map(() => 1, [''] as const))
  assertEqual<1[]>(map(() => 1, [''] as ['']))
  assertEqual<(1 | 2)[]>(map(() => 1 as 1 | 2, [''] as ['']))
  assertEqual<number[]>(map(() => 1, [[]]))
  assertEqual<1[]>(map(() => 1, [[]]))
  assertEqual<1[]>(map(() => 1, [[]] as const))

  assertEqual<{}>(map(() => {}, {}))
  assertEqual<{}>(map(() => {}, {} as const))
  assertEqual<{}>(map(() => {}, {} as {}))
  assertEqual<{ hoge: undefined }>(map(() => {}, { hoge: 'huga' }))
  assertEqual<{ readonly hoge: undefined }>(
    map(() => {}, { hoge: 'huga' } as const)
  )
  assertEqual<{ hoge: undefined; hello: undefined }>(
    map(() => {}, { hoge: 'huga', hello: 'world' })
  )
  assertEqual<{ hoge: number }>(map(() => 1, { hoge: 'huga' }))
  assertEqual<{ hoge: 1 }>(map(() => 1 as const, { hoge: 'huga' }))
  assertEqual<{ readonly hoge: 1 }>(
    map(() => 1 as const, { hoge: 'huga' } as const)
  )
  assertEqual<{ hoge: string }>(
    map((val, key) => `${key}-${val}`, { hoge: 'huga' })
  )
  assertEqual<{ hoge: `hoge-${string}` }>(
    map((val, key) => `${key}-${val}` as const, { hoge: 'huga' })
  )
  assertEqual<{ hoge: `hoge-huga` }>(
    map((val, key) => `${key}-${val}` as const, { hoge: 'huga' } as const)
  )
})
