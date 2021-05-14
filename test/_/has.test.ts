// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../../dev_deps.ts'
import { has } from '../../src/_/has.ts'

Deno.test('has', () => {
  const table: [string | number, Record<PropertyKey, unknown>, boolean][] = [
    ['', {}, false],
    ['', { ' ': '' }, false],
    ['', { ' ': { '': '' } }, false],
    [0, {}, false],
    [0, { 1: '' }, false],
    [0, { 1: { 0: '' } }, false],
    ['', { '': '' }, true],
    ['Hello', { hello: '' }, false],
    ['Hello', { Hello: '' }, true],
    ['hello', { hello: '' }, true],
    [0, { 0: 1 }, true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(has(a, b), expected, `has(${a}, ${b}) -> ${expected}`)
  })
})
