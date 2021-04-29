import { assertEquals } from '../deps.ts'
import { props } from '../src/props.ts'

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
})
