// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { assertEquals } from '../dev_deps.ts'
import { constructorName } from '../src/constructorName.ts'
import { isSymbol } from '../src/isSymbol.ts'

Deno.test('constructorName', () => {
  function fn() {
    true
  }
  class Class {}
  const table: [unknown, string][] = [
    [Object, 'Function'],
    [new Object(), 'Object'],
    [Object(), 'Object'],
    [{}, 'Object'],
    [{ hoge: 'huga' }, 'Object'],
    [new Number(), 'Number'],
    [Number(), 'Number'],
    [Number, 'Function'],
    [1, 'Number'],
    ['', 'String'],
    [String(), 'String'],
    [String, 'Function'],
    [new String(), 'String'],
    [new Boolean(), 'Boolean'],
    [true, 'Boolean'],
    [Boolean, 'Function'],
    [new Boolean(), 'Boolean'],
    [Boolean(), 'Boolean'],
    [undefined, ''],
    [null, ''],
    [Symbol(), 'Symbol'],
    [Symbol, 'Function'],
    [1n, 'BigInt'],
    [BigInt, 'Function'],
    [Array, 'Function'],
    [Array([]), 'Array'],
    [new Array([]), 'Array'],
    [[], 'Array'],
    [Date, 'Function'],
    [new Date(0), 'Date'],
    [Date(), 'String'],
    [/a/, 'RegExp'],
    [RegExp, 'Function'],
    [new RegExp(''), 'RegExp'],
    [Error, 'Function'],
    [Error(''), 'Error'],
    [new Error(), 'Error'],
    [TypeError, 'Function'],
    [TypeError(), 'TypeError'],
    [new TypeError(), 'TypeError'],
    [Set, 'Function'],
    [new Set(), 'Set'],
    [Map, 'Function'],
    [new Map(), 'Map'],
    [() => true, 'Function'],
    [fn, 'Function'],
    [Class, 'Function'],
    [new Class(), 'Class']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      constructorName(val),
      expected,
      `constructorName(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
