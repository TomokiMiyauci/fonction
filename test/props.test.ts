// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { props } from '../src/props.ts'
import { assertEqual } from './asserts.ts'

Deno.test('props', () => {
  const table: [string | number, Record<PropertyKey, unknown>, unknown][] = [
    ['', {}, undefined],
    ['', { ' ': '' }, undefined],
    ['', { ' ': { '': '' } }, undefined],
    [0, {}, undefined],
    [0, { 1: '' }, undefined],
    [0, { 1: { 0: '' } }, undefined],
    ['', { '': '' }, ''],
    ['Hello', { hello: '' }, undefined],
    ['Hello', { Hello: '' }, ''],
    ['hello', { hello: '' }, ''],
    [0, { 0: 1 }, 1]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(props(a, b), expected, `props(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<undefined>(props('', {}))
  assertEqual<undefined>(props('a', {}))
  assertEqual<string>(props('a', { a: 'b' }))
  assertEqual<undefined>(props(0, { a: 'b' }))
  assertEqual<1>(props(0, { 0: 1 as const }))
  assertEqual<number>(props(0, { 0: 1 }))
  assertEqual<'b'>(props('a', { a: 'b' as const }))
})
