// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { assertEquals } from '../../dev_deps.ts'
import { MapObject, mapObject } from '../../src/_/mapObject.ts'
import { AnyFn } from '../../src/types/index.ts'
import { assertEqual } from '../asserts.ts'
Deno.test('mapObject', () => {
  const table: [AnyFn, Record<string, unknown>, Record<string, unknown>][] = [
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
  table.forEach(([fn, array, expected]) => {
    assertEquals(
      mapObject(fn, array),
      expected,
      `mapObject(${fn}, ${array}) -> ${expected}`
    )
  })

  assertEqual<{}>(mapObject(() => {}, {}))
  assertEqual<{}>(mapObject(() => {}, {} as const))
  assertEqual<{}>(mapObject(() => {}, {} as {}))
  assertEqual<{ hoge: undefined }>(mapObject(() => {}, { hoge: 'huga' }))
  assertEqual<{ readonly hoge: undefined }>(
    mapObject(() => {}, { hoge: 'huga' } as const)
  )
  assertEqual<{ hoge: undefined; hello: undefined }>(
    mapObject(() => {}, { hoge: 'huga', hello: 'world' })
  )
  assertEqual<{ hoge: number }>(mapObject(() => 1, { hoge: 'huga' }))
  assertEqual<{ hoge: 1 }>(mapObject(() => 1 as const, { hoge: 'huga' }))
  assertEqual<{ readonly hoge: 1 }>(
    mapObject(() => 1 as const, { hoge: 'huga' } as const)
  )
  assertEqual<{ hoge: string }>(
    mapObject((val, key) => `${key}-${val}`, { hoge: 'huga' })
  )
  assertEqual<{ hoge: `hoge-${string}` }>(
    mapObject((val, key) => `${key}-${val}` as const, { hoge: 'huga' })
  )
  assertEqual<{ hoge: `hoge-huga` }>(
    mapObject((val, key) => `${key}-${val}` as const, { hoge: 'huga' } as const)
  )
})

Deno.test('types', () => {
  assertEqual<{}, MapObject<void, {}>>()
  assertEqual<{}, MapObject<undefined, {}>>()
  assertEqual<{}, MapObject<null, {}>>()
  assertEqual<{ hoge: undefined }, MapObject<void, { hoge: 'huga' }>>()
  assertEqual<{ hoge: number }, MapObject<number, { hoge: 'huga' }>>()
  assertEqual<
    { readonly hoge: number },
    MapObject<number, { readonly hoge: 'huga' }>
  >()
  assertEqual<{ hoge: {} }, MapObject<{}, { hoge: 'huga' }>>()
  assertEqual<{ hoge: [] }, MapObject<[], { hoge: 'huga' }>>()
  assertEqual<
    { hoge: number; hello: number },
    MapObject<number, { hoge: 'huga'; hello: 'world' }>
  >()
})
