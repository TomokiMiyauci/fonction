import { assertEquals } from '../../deps.ts'
import { prop } from '../../src/_/prop.ts'

Deno.test('prop', () => {
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
    assertEquals(prop(a, b), expected, `prop(${a}, ${b}) -> ${expected}`)
  })
})
