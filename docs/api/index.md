# API

Version: `Latest`
{.my-1}

## Functions

### add

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Adds first argument and second argument.
{.desc}




**Signature:**

```ts
add: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input number |
| `b` | The second input number |

<code class="returns">=></code> The result of  `a + b`

</details>


#### Example 1

```ts
// Basic
add(1, 2) // 3
```

#### Example 2

```ts
// Bigint
add(1n, 2n) // 3n
```

#### Example 3

```ts
// Curry
const plus2(2)
plus2(-3) // -1
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/add.ts)

---

### and

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Returns true if both arguments are true; otherwise false.
{.desc}




**Signature:**

```ts
and: <T, U>(a: T, b: U) => T extends Falsy ? false : U extends Falsy ? false : boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input any value |
| `b` | The second input any value |

<code class="returns">=></code> The result of  `!!a && !!bb`

</details>


#### Example 

```ts
and(true, true) // true
and(false, true) // false
and(true, false) // false
and(false, false) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { and } from '../src/and.ts'
import { Falsy } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('and', () => {
  const table: [unknown, unknown, boolean][] = [
    [true, true, true],
    [false, true, false],
    [true, false, false],
    [false, false, false]
  ]

  table.forEach(([a, b, expected]) => {
    assertEquals(and(a, b), expected, `add(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<false>(and(false as Falsy, false as Falsy))
  assertEqual<false>(and(false as Falsy, Boolean))
  assertEqual<false>(and(Boolean, false as Falsy))
  assertEqual<boolean>(and(Boolean, Boolean))
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/and.ts)

---

### append

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Returns a new list containing the contents of the given list, followed by the given value.
{.desc}




**Signature:**

```ts
append: <T, U>(val: T, list: U[]) => (T | U)[]
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | The value to add to the end of the new list |
| `list` | The list of elements to add a new item to |

<code class="returns">=></code> The result of  `[...list, val]`

</details>


#### Example 

```ts
append('Tom', ['hello']) // ['hello', 'Tom']
append('Tom', []) // ['Tom']
append(['Tom'], ['hello', 'world']) // ['hello', 'world', ['Tom']]
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { append } from '../src/append.ts'

Deno.test('append', () => {
  const table: [unknown, unknown[], unknown[]][] = [
    [null, [], [null]],
    [undefined, [], [undefined]],
    ['', [], ['']],
    [{}, [], [{}]],
    [0, [], [0]],
    ['a', ['b'], ['b', 'a']],
    ['a', ['b', 'c', 'd'], ['b', 'c', 'd', 'a']],
    [[], [], [[]]],
    [[1], [], [[1]]],
    [[1], [2], [2, [1]]],
    [[1], [2, 3, 4], [2, 3, 4, [1]]]
  ]

  table.forEach(([val, list, expected]) => {
    assertEquals(
      append(val, list),
      expected,
      `append(${val}, ${list}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/append.ts)

---

### chunk

<small>Added from [1.4.0](./1.4.0/)</small>
{.my-1}




Return an array of elements split into groups the length of size.
{.desc}




**Signature:**

```ts
chunk: <T extends number, U extends readonly unknown[]>(size: T, array: U) => T extends 0 ? U : `${T}` extends `-${number}` ? U : U extends readonly [
] ? U : U extends readonly (infer R)[] ? R[][] : never
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `size` | The length of each chunk |
| `array` | The array to process |

<code class="returns">=></code> Returns the new array of chunks

</details>

::: tip Remark
If array can't be split evenly, the final chunk will be the remaining elements.
:::

#### Example 1

```ts
// Basic
chunk(1, ['a', 'b', 'c', 'd']) // [['a'], ['b'], ['c'], ['d']]
chunk(3, ['a', 'b', 'c', 'd']) // [['a', 'b', 'c'], ['d']]
chunk(5, ['a', 'b', 'c', 'd']) // [['a', 'b', 'c', 'd']]
```

#### Example 2

```ts
// Illegal size
chunk(0, ['a', 'b', 'c']) // ['a', 'b', 'c']
chunk(-3, ['a', 'b', 'c']) // ['a', 'b', 'c']
chunk(5, []) // []
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { chunk } from '../src/chunk.ts'
import { assertEqual } from './asserts.ts'

Deno.test('chunk', () => {
  const arr = ['a', 'b', 'c', 'd']
  const arr2 = [{}, [], 0, null, undefined]
  const table: [number, unknown[], unknown[][] | unknown[]][] = [
    [1, [], []],
    [0, [], []],
    [2, [], []],
    [1, [''], [['']]],
    [2, [''], [['']]],
    [3, [''], [['']]],
    [4, [''], [['']]],
    [0, [''], ['']],
    [-0, [''], ['']],
    [-1, [''], ['']],
    [-2, [''], ['']],
    [-3, [''], ['']],
    [-4, [''], ['']],
    [1, arr, [['a'], ['b'], ['c'], ['d']]],
    [
      2,
      arr,
      [
        ['a', 'b'],
        ['c', 'd']
      ]
    ],
    [3, arr, [['a', 'b', 'c'], ['d']]],
    [4, arr, [['a', 'b', 'c', 'd']]],
    [5, arr, [['a', 'b', 'c', 'd']]],
    [6, arr, [['a', 'b', 'c', 'd']]],
    [1, arr2, [[{}], [[]], [0], [null], [undefined]]],
    [2, arr2, [[{}, []], [0, null], [undefined]]],
    [
      3,
      arr2,
      [
        [{}, [], 0],
        [null, undefined]
      ]
    ],
    [4, arr2, [[{}, [], 0, null], [undefined]]],
    [5, arr2, [[{}, [], 0, null, undefined]]],
    [6, arr2, [[{}, [], 0, null, undefined]]]
  ]

  table.forEach(([a, b, expected]) => {
    assertEquals(chunk(a, b), expected, `chunk(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<never[]>(chunk(0, []))
  assertEqual<[]>(chunk(0, [] as []))
  assertEqual<readonly []>(chunk(0, [] as const))
  assertEqual<[]>(chunk(1, [] as []))
  assertEqual<string[]>(chunk(-1, ['']))
  assertEqual<string[]>(chunk(-0, ['']))
  assertEqual<string[]>(chunk(0, ['']))
  assertEqual<string[][]>(chunk(1, ['']))
  assertEqual<string[][]>(chunk(2, ['']))
  assertEqual<string[][]>(chunk(3, ['']))
  assertEqual<string[][]>(chunk(4, ['']))
  assertEqual<''[][]>(chunk(1, [''] as const))
  assertEqual<readonly ['a', 'b', 'c', 'd']>(
    chunk(-4, ['a', 'b', 'c', 'd'] as const)
  )
  assertEqual<readonly ['a', 'b', 'c', 'd']>(
    chunk(0, ['a', 'b', 'c', 'd'] as const)
  )
  // TODO: Implement more rigorous type inference
  // assertEqual<[['a'], ['b'], ['c'], ['d']]>(
  //   chunk(1, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
  // assertEqual<[['a', 'b'], ['c', 'd']]>(
  //   chunk(2, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
  // assertEqual<[['a', 'b', 'c'], ['d']]>(
  //   chunk(3, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
  // assertEqual<[['a', 'b', 'c', 'd']]>(
  //   chunk(4, ['a', 'b', 'c', 'd'] as ['a', 'b', 'c', 'd'])
  // )
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/chunk.ts)

---

### dec

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Decrements its argument.
{.desc}




**Signature:**

```ts
dec: {
    (val: number): number;
    (val: bigint): bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | input  `number`  or  `bigint` |

<code class="returns">=></code> Decremented  `val`

</details>


#### Example 

```ts
dec(100) // 99
dec(10n) // 9n
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { dec } from '../src/dec.ts'
import { assertEqual } from './asserts.ts'

Deno.test('dec', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [number | bigint | any, number | bigint][] = [
    [0, -1],
    [-10, -11],
    [10, 9],
    [0n, -1n],
    [-10n, -11n],
    [10n, 9n]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(dec(val), expected, `dec(${val}) -> ${expected}`)
  })

  assertEqual<number>(dec(1 as const))
  assertEqual<number>(dec(1))
  assertEqual<bigint>(dec(1n as const))
  assertEqual<bigint>(dec(1n))
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/dec.ts)

---

### defaultTo

<small>Added from [1.4.0](./1.4.0/)</small>
{.my-1}




Returns the second argument if it is not `null`, `undefined` or `NaN`; otherwise the first argument is returned.
{.desc}




**Signature:**

```ts
defaultTo: <T extends unknown>(a: T) => <U extends unknown>(b: U) => IsNill<U> extends true ? T : IsNumber<U> extends false ? U : T | U
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | `a`  will be returned instead of  `default` |

<code class="returns">=></code> Returns a function that stores the default  `a`  value. The function accept  `b`  argument. if  `b`  is  `null` ,  `undefined`  or  `NaN` , return  `a` ; otherwise return  `b`

</details>


#### Example 

```ts
const defaultVal = defaultTo('anonymous')
defaultVal(undefined) // 'anonymous'
defaultVal(null) // 'anonymous'
defaultVal(NaN) // 'anonymous'

defaultVal('Tom') // 'Tom'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { defaultTo } from '../src/defaultTo.ts'
import { assertEqual } from './asserts.ts'

Deno.test('defaultTo', () => {
  const defaultValue = 'hello'
  const table: [unknown, unknown, unknown][] = [
    [defaultValue, '', ''],
    [defaultValue, 'world', 'world'],
    [defaultValue, undefined, defaultValue],
    [defaultValue, null, defaultValue],
    [defaultValue, NaN, defaultValue],
    [defaultValue, NaN, defaultValue],
    [defaultValue, 0, 0],
    [defaultValue, {}, {}],
    [defaultValue, [], []]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(
      defaultTo(a)(b),
      expected,
      `defaultTo(${a}, ${b}) -> ${expected}`
    )
  })

  assertEqual<string>(defaultTo('')(undefined as undefined))
  assertEqual<string>(defaultTo('')(null as null))
  assertEqual<''>(defaultTo('' as const)(undefined))
  assertEqual<''>(defaultTo('' as const)(null))
  assertEqual<string | number>(defaultTo('')(100))
  assertEqual<string | number>(defaultTo('')(NaN))
  assertEqual<'' | number>(defaultTo('' as const)(NaN))
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/defaultTo.ts)

---

### divide

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Divide its second argument from its first argument.
{.desc}




**Signature:**

```ts
divide: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
} & {
    (a: typeof _, b: number): (a: number) => number;
    (a: typeof _, b: bigint): (a: bigint) => bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input number |
| `b` | The second input number |

<code class="returns">=></code> The result of  `a / b`

</details>

::: tip Remark
Since division is not idempotent, there are two ways to curry.
:::

#### Example 1

```ts
// Number
divide(10, 100) // 0.1
```

#### Example 2

```ts
// Bigint
divide(1n, 2n) // 3n
```

#### Example 3

```ts
// First argument curry
const reciprocal = divide(1)
reciprocal(4) // 0.25
```

#### Example 4

```ts
// Second argument curry
import { _ } from 'fonction'
const half = divide(_, 2)
half(20) // 10
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/divide.ts)

---

### endsWith

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Checks if a string ends with the provided substring.
{.desc}




**Signature:**

```ts
endsWith: <T extends string, U extends string | undefined = undefined>(val: T, target?: U | undefined) => StringWith<"endsWith", U>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | search string |
| `target` | target string |

<code class="returns">=></code> The result of  `target.endsWith(val)`

</details>


#### Example 1

```ts
// Basic
endsWith('world', 'hello world') // true
endsWith('earth', 'hello world') // false
```

#### Example 2

```ts
// Curry
const endsWithHtml = endsWith('html')
endsWithHtml('index.html') // true
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { endsWith } from '../src/endsWith.ts'

Deno.test('endsWith', () => {
  const table: [string, string, boolean][] = [
    ['', '', true],
    ['o', 'hello', true],
    ['world', 'hello world', true],
    ['O', 'hello', false],
    ['earth', 'hello world', false],
    ['Hello', 'hello', false]
  ]
  table.forEach(([val, target, expected]) => {
    assertEquals(
      endsWith(val, target),
      expected,
      `endsWith(${val}, ${target}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/endsWith.ts)

---

### F

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




A function that always returns `false`. Any passed in parameters are ignored.
{.desc}




**Signature:**

```ts
F: AnyFn<unknown, false>
```

<details class="parameters-detail">
<summary>Parameters</summary>


<code class="returns">=></code> false

</details>


#### Example 

```ts
F() // false
F(1, 'hello', 'world') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { F } from '../src/F.ts'
import { assertReturnType } from './asserts.ts'

Deno.test('F', () => {
  const table: unknown[] = [
    [''],
    [1, 2, 3],
    [{}, [], undefined, null],
    [undefined],
    [null]
  ]
  table.forEach((val) => {
    assertEquals(F(val), false, `F(${val}) -> false`)
  })

  assertReturnType<false>(F)
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/F.ts)

---

### first

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Returns the first element of the given list or string.
{.desc}




**Signature:**

```ts
first: <T extends string | readonly unknown[]>(val: T) => First<T>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | String or any array object |

<code class="returns">=></code> The first element of the  `val`

</details>


#### Example 1

```ts
// String
first('') // ''
first('hello') // 'h'
```

#### Example 2

```ts
// Array
first('hello', 'new', 'world') // 'hello'
first([]) // undefined
first(['one', 2, 3, 4]) // 'one'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { First, first } from '../src/first.ts'
import { assertEqual } from './asserts.ts'
Deno.test('first', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [string | unknown[] | any, unknown][] = [
    ['', ''],
    ['a', 'a'],
    [' ab', ' '],
    ['abcd', 'a'],
    ['abcde ', 'a'],
    ['abcd_', 'a'],
    [[], undefined],
    [[''], ''],
    [['hello', 'world'], 'hello'],
    [['hello', 'new', 'world'], 'hello'],
    [
      [['hello', 'new', 'world'], 'test'],
      ['hello', 'new', 'world']
    ],
    [
      [
        ['hello', 'new', 'world'],
        ['hello2', 'world']
      ],
      ['hello', 'new', 'world']
    ],
    [[0], 0],
    [[0, 3, 6, 9], 0],
    [[{}], {}]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(first(val), expected, `first(${val}) -> ${expected}`)
  })

  assertEqual<undefined>(first([]))
  assertEqual<undefined>(first([] as const))
  assertEqual<undefined>(first([] as []))
  assertEqual<string>(first(['']))
  assertEqual<''>(first([''] as const))
  assertEqual<''>(first([''] as ['']))
  assertEqual<string | number>(first(['1', 2]))
  assertEqual<'1'>(first(['1', 2] as const))
  assertEqual<100>(first([100, 200, 'hello', []] as [100, 200, 'hello', []]))
  assertEqual<string>(first(''))
  assertEqual<string>(first('hello'))
  assertEqual<string>(first('hello' as const))
})

Deno.test('First', () => {
  assertEqual<undefined, First<[] | never[] | readonly [] | readonly never[]>>()
  assertEqual<'', First<[''] | readonly ['']>>()
  assertEqual<string, First<string[]>>()
  assertEqual<string | number, First<string | number[]>>()
  assertEqual<100, First<[100, 200, 'hello', []]>>()
  assertEqual<string, First<string>>()
  assertEqual<'', First<''>>()
  assertEqual<'h', First<'hello'>>()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/first.ts)

---

### flattenDeep

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Recursively flattens array.
{.desc}




**Signature:**

```ts
flattenDeep: <T extends readonly unknown[]>(val: T) => FlattenDeep<T>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | The  `array`  to flatten |

<code class="returns">=></code> The result of  `val.flat(Infinity)`

</details>


#### Example 

```ts
flattenDeep([]) // []
flattenDeep([1, [2, [3, [4]], 5]]) // [1, 2, 3, 4, 5]
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { FlattenDeep as Flat, flattenDeep } from '../src/flattenDeep.ts'
import { assertEqual } from './asserts.ts'
Deno.test('flattenDeep', () => {
  const table: [unknown[], unknown[]][] = [
    [[], []],
    [[null], [null]],
    [
      [null, undefined, 1, 'hello'],
      [null, undefined, 1, 'hello']
    ],
    [[[]], []],
    [[[1]], [1]],
    [[[1, 2, 3]], [1, 2, 3]],
    [[[1, 2, 3, undefined, null]], [1, 2, 3, undefined, null]],
    [
      [[1, 2, 3, undefined, null], 4, 5, 6],
      [1, 2, 3, undefined, null, 4, 5, 6]
    ],
    [
      [
        [1, 2, 3, undefined, null],
        [4, 5, 6]
      ],
      [1, 2, 3, undefined, null, 4, 5, 6]
    ],
    [
      [[1, 2, 3, undefined, ['hello', 4], null]],
      [1, 2, 3, undefined, 'hello', 4, null]
    ],
    [
      [
        '',
        [1, 2, 3, undefined, ['hello', 4], null],
        [5, 6, ['world']],
        [[7, 8], 9]
      ],
      ['', 1, 2, 3, undefined, 'hello', 4, null, 5, 6, 'world', 7, 8, 9]
    ]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      flattenDeep(val),
      expected,
      `flattenDeep(${val}) -> ${expected}`
    )
  })
})

Deno.test('types', () => {
  assertEqual<[], Flat<[]>>()
  assertEqual<never[], Flat<never[]>>()
  // TODO: Success this case
  // assertEqual<never[], Flat<never[][]>>()
  assertEqual<[''], Flat<['']>>()
  assertEqual<[number], Flat<[number]>>()
  assertEqual<[number, string], Flat<[number, string]>>()
  assertEqual<number[], Flat<number[]>>()
  assertEqual<(number | string)[], Flat<(number | string)[]>>()
  assertEqual<readonly [''], Flat<readonly ['']>>()
  assertEqual<readonly ['', 'hello'], Flat<readonly ['', 'hello']>>()
  assertEqual<readonly ['', ''], Flat<readonly ['', readonly ['']]>>()
  assertEqual<
    readonly ['', '', 'hello'],
    Flat<readonly ['', readonly ['', readonly ['hello']]]>
  >()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/flattenDeep.ts)

---

### gt

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Returns `true` if the first argument is greater than the second; otherwise `false`.
{.desc}




**Signature:**

```ts
gt: <T extends Ord>(a: T, b: T) => boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input value |
| `b` | The second input value |

<code class="returns">=></code> The result of  `a > b`

</details>


#### Example 1

```ts
// Number
gt(2, 1) // true
gt(2, 2) // false
```

#### Example 2

```ts
// Bigint
gt(2n, 1n) // true
gt(2n, 2n) // false
```

#### Example 3

```ts
// String
gt('z', 'a') // true
gt('a', 'z') // false
```

#### Example 4

```ts
// Boolean
gt(true, false) // true
gt(false, true) // false
gt(true, true) // false
gt(false, false) // false
```

#### Example 5

```ts
// Date
gt(new Date('2000/1/2'), new Date('2000/1/1')) // true
gt(new Date('1999/12/31'), new Date('2000/1/1')) // false
gt(new Date('2000/1/1'), new Date('2000/1/1')) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { gt } from '../src/gt.ts'
import { Ord } from '../src/types/index.ts'

Deno.test('gt', () => {
  const table: [Ord, Ord, boolean][] = [
    [0, 0, false],
    [0, 1, false],
    [1, 0, true],
    [0n, 0n, false],
    [0n, 1n, false],
    [1n, 0n, true],
    ['a', 'a', false],
    ['a', 'z', false],
    ['z', 'a', true],
    ['za', 'a', true],
    [true, true, false],
    [false, true, false],
    [false, false, false],
    [true, false, true],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), false],
    [new Date('1999/12/31'), new Date('2000/1/1'), false],
    [new Date('2000/1/2'), new Date('2000/1/1'), true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(gt(a, b), expected, `gt(${a}, ${b}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/gt.ts)

---

### gte

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Returns `true` if the first argument is greater than or equal to the second; otherwise `false`.
{.desc}




**Signature:**

```ts
gte: <T extends Ord>(a: T, b: T) => boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input value |
| `b` | The second input value |

<code class="returns">=></code> The result of  `a >= b`

</details>


#### Example 1

```ts
// Number
gte(2, 1) // true
gte(2, 2) // true
gte(2, 3) // false
```

#### Example 2

```ts
// Bigint
gte(2n, 1n) // true
gte(2n, 2n) // true
gte(2n, 3n) // false
```

#### Example 3

```ts
// String
gte('z', 'a') // true
gte('a', 'a') // true
gte('a', 'z') // false
```

#### Example 4

```ts
// Boolean
gte(true, false) // true
gte(true, true) // true
gte(false, false) // true
gte(false, true) // false
```

#### Example 5

```ts
// Date
gte(new Date('2000/1/2'), new Date('2000/1/1')) // true
gte(new Date('2000/1/1'), new Date('2000/1/1')) // true
gte(new Date('1999/12/31'), new Date('2000/1/1')) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { gte } from '../src/gte.ts'
import { Ord } from '../src/types/index.ts'

Deno.test('gte', () => {
  const table: [Ord, Ord, boolean][] = [
    [0, 1, false],
    [0, 0, true],
    [1, 0, true],
    [0n, 1n, false],
    [0n, 0n, true],
    [1n, 0n, true],
    ['a', 'z', false],
    ['a', 'a', true],
    ['z', 'a', true],
    ['za', 'a', true],
    [false, true, false],
    [false, false, true],
    [true, true, true],
    [true, false, true],
    [new Date('1999/12/31'), new Date('2000/1/1'), false],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), true],
    [new Date('2000/1/2'), new Date('2000/1/1'), true]
  ]

  table.forEach(([a, b, expected]) => {
    assertEquals(gte(a, b), expected, `gte(${a}, ${b}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/gte.ts)

---

### has

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Returns whether or not an object has an own property with the specified name.
{.desc}




**Signature:**

```ts
has: <T extends string | number | (string | number)[], U extends Record<PropertyKey, unknown>>(props: T, obj: U) => T extends unknown[] ? boolean : T extends string | number ? U extends Record<T, unknown> ? true : false : never
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `props` | The name of the property to check for |
| `obj` | The check object |

<code class="returns">=></code> The result of  `Object.prototype.hasOwnProperty`

</details>


#### Example 1

```ts
// Flat
has('hello', { hello: 'world' }) // true
has(0, { 0 : 1}) // true
has('', {}) // false
has('hello', { hi : hello: 'world' }) // false
```

#### Example 2

```ts
// Nest
hasPath(['hello'], { hello: 'world' }) // true
hasPath([0], { 0: 1 }) // true
hasPath(['hello', 'world'], { hello: { world: '' } } // true

hasPath(['hi'], { hello: '' } ) // false
hasPath(['hi', 'Tom'], { hi: { John: 1 } } ) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { has } from '../src/has.ts'

Deno.test('has', () => {
  const tablePrimitive: [
    string | number,
    Record<PropertyKey, unknown>,
    boolean
  ][] = [
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

  tablePrimitive.forEach(([a, b, expected]) => {
    assertEquals(has(a, b), expected, `has(${a}, ${b}) -> ${expected}`)
  })

  const tableArray: [
    (string | number)[],
    Record<PropertyKey, unknown>,
    boolean
  ][] = [
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
  tableArray.forEach(([a, b, expected]) => {
    assertEquals(has(a, b), expected, `has(${a}, ${b}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/has.ts)

---

### hasPath

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}



<span class="tag deprecated">deprecate</span>

Returns whether or not a path exists in an object. Only the object's own properties are checked.
{.desc}


::: danger
This function will remove next major release.
:::


**Signature:**

```ts
hasPath: <T extends unknown>(path: (string | number)[], obj: Record<PropertyKey, T>) => boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `path` | The path to use |
| `obj` | The object to check the path in |

<code class="returns">=></code> Whether the path exists

</details>


#### Example 

```ts
hasPath(['hello'], { hello: 'world' }) // true
hasPath([0], { 0: 1 }) // true
hasPath(['hello', 'world'], { hello: { world: '' } } // true

hasPath(['hi'], { hello: '' } ) // false
hasPath(['hi', 'Tom'], { hi: { John: 1 } } ) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { hasPath } from '../src/hasPath.ts'

Deno.test('hasPath', () => {
  const table: [
    (string | number)[],
    Record<PropertyKey, unknown>,
    boolean
  ][] = [
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
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/hasPath.ts)

---

### head

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Returns all but the last element of the given list or string.
{.desc}




**Signature:**

```ts
head: {
    (val: string): string;
    <T extends unknown[]>(val: T): T;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | string or any array object |

<code class="returns">=></code> The result of  `val.slice(0, -1)`

</details>


#### Example 1

```ts
// String
head('hello') // 'hell'
head('h') // ''
head('') // ''
```

#### Example 2

```ts
head([1, 2, 3]) // [1, 2]
head(['hello', 'world']) // ['hello']
head(['hello']) // []
head([]) // []
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { head } from '../src/head.ts'

Deno.test('head', () => {
  const tableString: [string, string][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'a'],
    ['abc', 'ab']
  ]
  tableString.forEach(([val, expected]) => {
    assertEquals(head(val), expected, `head(${val}) -> ${expected}`)
  })

  const tableArray: [unknown[], unknown[]][] = [
    [[], []],
    [[''], []],
    [[undefined], []],
    [[null], []],
    [[0], []],
    [['', ''], ['']],
    [[0, 0], [0]],
    [[0, ''], [0]],
    [['hello', 'world'], ['hello']],
    [
      ['hello', 'new', 'world'],
      ['hello', 'new']
    ],
    [
      [undefined, null, 'hello', 'world'],
      [undefined, null, 'hello']
    ],
    [[['hello', 'world']], []]
  ]

  tableArray.forEach(([val, expected]) => {
    assertEquals(head(val), expected, `head(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/head.ts)

---

### identity

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Return the parameter supplied to it.
{.desc}




**Signature:**

```ts
identity: <T>(val: T) => T
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | The value to return |

<code class="returns">=></code> The result of  `val`

</details>


#### Example 

```ts
identity(1) // 1
identity({}) // {}
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { identity } from '../src/identity.ts'

Deno.test('identity', () => {
  const table: [unknown, unknown][] = [
    ['', ''],
    [0, 0],
    [1n, 1n],
    [() => 1, () => 1],
    [{}, {}],
    [[], []]
  ]
  table.forEach(([val]) => {
    assertEquals(identity(val), val, `identity(${val}) -> ${val}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/identity.ts)

---

### inc

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Increments its argument.
{.desc}




**Signature:**

```ts
inc: {
    (val: number): number;
    (val: bigint): bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input  `number`  or  `bigint` |

<code class="returns">=></code> Incremented  `val`

</details>


#### Example 

```ts
inc(100) // 101
inc(10n) // 11n
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { inc } from '../src/inc.ts'
import { assertEqual } from './asserts.ts'
Deno.test('inc', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [number | bigint | any, number | bigint][] = [
    [0, 1],
    [-10, -9],
    [10, 11],
    [0n, 1n],
    [-10n, -9n],
    [10n, 11n]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(inc(val), expected, `inc(${val}) -> ${expected}`)
  })

  assertEqual<number>(inc(1 as const))
  assertEqual<number>(inc(1))
  assertEqual<bigint>(inc(1n as const))
  assertEqual<bigint>(inc(1n))
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/inc.ts)

---

### isArray

<small>Added from [1.3.0](./1.3.0/)</small>
{.my-1}




Whatever argument is `Array` or not.
{.desc}




**Signature:**

```ts
isArray: (val: unknown) => val is any[]
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `Array.isArray(val)`

</details>


#### Example 

```ts
isArray([]) // true
isArray(['hello', 'world']) // true
isArray({}) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isArray } from '../src/isArray.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isArray', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_ARRAY, true],
    [[[]], true],
    [null, false],
    [undefined, false],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isArray(val),
      expected,
      `isArray(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isArray.ts)

---

### isBigint

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `bigint` or not.
{.desc}




**Signature:**

```ts
isBigint: (val: unknown) => val is bigint
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | input any value |

<code class="returns">=></code> The result of  `typeof val === 'bigint'`

</details>


#### Example 

```ts
isBigint(1n) // true
isBigint(1000) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isBigint } from '../src/isBigint.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isBigint', () => {
  const table: [unknown, boolean][] = [
    [BIG1, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isBigint(val),
      expected,
      `isBigint(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isBigint.ts)

---

### isBoolean

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `boolean` or not.
{.desc}




**Signature:**

```ts
isBoolean: (val: unknown) => val is boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `typeof val === 'boolean'`

</details>


#### Example 

```ts
isBoolean(true) // true
isBoolean('hello') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isBoolean } from '../src/isBoolean.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isBoolean', () => {
  const table: [unknown, boolean][] = [
    [false, true],
    [true, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [BIG1, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isBoolean(val),
      expected,
      `isBoolean(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isBoolean.ts)

---

### isEmpty

<small>Added from [1.3.0](./1.3.0/)</small>
{.my-1}




Returns `true` if the given value is its type's empty value; otherwise `false`.
{.desc}




**Signature:**

```ts
isEmpty: (val: unknown) => val is Empty
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of empty or not

</details>

::: tip Remark
The definition of Empty - `''` - `{}` - `[]`
:::

#### Example 

```ts
isEmpty('') // true
isEmpty({}) // true
isEmpty([]) // true

isEmpty('hello world') // false
isEmpty(1000) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isEmpty } from '../src/isEmpty.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isEmpty', () => {
  const table: [unknown, boolean][] = [
    [BIG1, false],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, true],
    [EMPTY_OBJECT, true],
    [EMPTY_ARRAY, true],
    [MAP, false],
    [SET, false],
    ['test', false],
    [false, false],
    [true, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [{ nest: {} }, false],
    [[[]], false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isEmpty(val),
      expected,
      `isEmpty(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isEmpty.ts)

---

### isFunction

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `function` or not.
{.desc}




**Signature:**

```ts
isFunction: (val: unknown) => val is AnyFn<any, unknown>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `typeof val === 'function'`

</details>


#### Example 

```ts
isFunction(function) // true
isFunction('hello') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isFunction } from '../src/isFunction.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isFunction', () => {
  const table: [unknown, boolean][] = [
    [VOID_FN, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(
      isFunction(val),
      expected,
      `isFunction(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isFunction.ts)

---

### isNaN

<small>Added from [1.4.0](./1.4.0/)</small>
{.my-1}




Whatever argument is `NaN` or not.
{.desc}




**Signature:**

```ts
isNaN: (val: unknown) => val is number
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `Number.isNaN(val)`

</details>

::: tip Remark
`NaN` is primitive `number`.
:::

#### Example 

```ts
isNaN(NaN) // true
isNaN(100) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isNaN } from '../src/isNaN.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isNaN', () => {
  const table: [unknown, boolean][] = [
    [NaN, true],
    [Infinity, false],
    [-Infinity, false],
    [null, false],
    [undefined, false],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isNaN(val),
      expected,
      `isNaN(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isNaN.ts)

---

### isNill

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `undefined` or `null`.
{.desc}




**Signature:**

```ts
isNill: (val: unknown) => val is null | undefined
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of type of  `val`  is undefined or null

</details>


#### Example 

```ts
isNumber(0) // true
isNumber('hello') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isNill } from '../src/isNill.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isNill', () => {
  const table: [unknown, boolean][] = [
    [null, true],
    [undefined, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isNill(val),
      expected,
      `isNill(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isNill.ts)

---

### isNull

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `null` or not.
{.desc}




**Signature:**

```ts
isNull: (val: unknown) => val is null
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `val === null`

</details>


#### Example 

```ts
isNull(null) // true
isNull(undefined) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isNull } from '../src/isNull.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isNull', () => {
  const table: [unknown, boolean][] = [
    [null, true],
    [undefined, false],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isNull(val),
      expected,
      `isNull(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isNull.ts)

---

### isNumber

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `number` or not.
{.desc}




**Signature:**

```ts
isNumber: (val: unknown) => val is number
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `typeof val === 'number'`

</details>


#### Example 

```ts
isNumber(0) // true
isNumber('hello') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isNumber } from '../src/isNumber.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isNumber', () => {
  const table: [unknown, boolean][] = [
    [ZERO, true],
    [ONE, true],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isNumber(val),
      expected,
      `isNumber(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isNumber.ts)

---

### isObject

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `object` or not.
{.desc}




**Signature:**

```ts
isObject: <T extends unknown>(val: T) => val is T
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of object or not

</details>

::: tip Remark
Definition of Primitive - `string` - `number` - `bigint` - `boolean` - `symbol` - `undefined` - `null`
:::

#### Example 

```ts
isObject([]) // true
isObject('hello') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isObject } from '../src/isObject.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isObject', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_OBJECT, true],
    [{ nest: {} }, true],
    [EMPTY_ARRAY, true],
    [[[]], true],
    [MAP, true],
    [SET, true],
    [WEAK_MAP, true],
    [WEAK_SET, true],
    [VOID_FN, true],
    [VOID_PROMISE, true],
    [DATE, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isObject(val),
      expected,
      `isObject(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isObject.ts)

---

### isPrimitive

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is `primitive` or not.
{.desc}




**Signature:**

```ts
isPrimitive: (val: unknown) => val is Primitive
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of primitive or not

</details>

::: tip Remark
Definition of Primitive - `string` - `number` - `bigint` - `boolean` - `symbol` - `undefined` - `null`
:::

#### Example 

```ts
isPrimitive(true) // true
isPrimitive([]) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isPrimitive } from '../src/isPrimitive.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isPrimitive', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_STRING, true],
    ['test', true],
    [false, true],
    [true, true],
    [ZERO, true],
    [ONE, true],
    [BIG1, true],
    [SYMBOL, true],
    [null, true],
    [undefined, true],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isPrimitive(val),
      expected,
      `isPrimitive(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isPrimitive.ts)

---

### isString

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `string` or not.
{.desc}




**Signature:**

```ts
isString: (val: unknown) => val is string
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `typeof val === 'string'`

</details>


#### Example 

```ts
isString('hello world') // true
isString(1000) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isString } from '../src/isString.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isString', () => {
  const table: [unknown, boolean][] = [
    [EMPTY_STRING, true],
    ['test', true],
    [false, false],
    [true, false],
    [ZERO, false],
    [ONE, false],
    [BIG1, false],
    [SYMBOL, false],
    [null, false],
    [undefined, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isString(val),
      expected,
      `isString(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isString.ts)

---

### isSymbol

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `symbol` or not.
{.desc}




**Signature:**

```ts
isSymbol: (val: unknown) => val is symbol
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `typeof val === 'symbol'`

</details>


#### Example 

```ts
isSymbol(Symbol('hello')) // true
isSymbol('hello') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isSymbol } from '../src/isSymbol.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isSymbol', () => {
  const table: [unknown, boolean][] = [
    [SYMBOL, true],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [null, false],
    [undefined, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(
      isSymbol(val),
      expected,
      `isSymbol(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isSymbol.ts)

---

### isUndefined

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Whatever argument is type of `undefined` or not.
{.desc}




**Signature:**

```ts
isUndefined: (val: unknown) => val is undefined
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input any value |

<code class="returns">=></code> The result of  `typeof val === 'undefined'`

</details>


#### Example 

```ts
isUndefined(undefined) // true
isUndefined('hello') // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { isSymbol } from '../src/isSymbol.ts'
import { isUndefined } from '../src/isUndefined.ts'
import {
  BIG1,
  DATE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  MAP,
  ONE,
  SET,
  SYMBOL,
  VOID_FN,
  VOID_PROMISE,
  WEAK_MAP,
  WEAK_SET,
  ZERO
} from './index.ts'

Deno.test('isUndefined', () => {
  const table: [unknown, boolean][] = [
    [undefined, true],
    [null, false],
    [ZERO, false],
    [ONE, false],
    [EMPTY_STRING, false],
    ['test', false],
    [false, false],
    [true, false],
    [BIG1, false],
    [SYMBOL, false],
    [EMPTY_OBJECT, false],
    [{ nest: {} }, false],
    [EMPTY_ARRAY, false],
    [[[]], false],
    [MAP, false],
    [SET, false],
    [WEAK_MAP, false],
    [WEAK_SET, false],
    [VOID_FN, false],
    [VOID_PROMISE, false],
    [DATE, false]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(
      isUndefined(val),
      expected,
      `isUndefined(${isSymbol(val) ? 'symbol' : val}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/isUndefined.ts)

---

### K

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




K combinator. Returns a function that always returns the given value.
{.desc}




**Signature:**

```ts
K: <T extends unknown>(val: T) => () => T
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | The value to wrap in a function |

<code class="returns">=></code> Function wrapped  `val`

</details>


#### Example 

```ts
const k = K('k')
k() // 'k'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { K } from '../src/K.ts'

Deno.test('K', () => {
  const table: [unknown][] = [
    [''],
    [{}],
    ['hello'],
    [() => 1],
    [[]],
    [undefined],
    [null]
  ]

  table.forEach(([val]) => {
    assertEquals(K(val)(), val, `K(${val})() -> ${val}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/K.ts)

---

### keys

<small>Added from [1.3.0](./1.3.0/)</small>
{.my-1}




Returns the names of the enumerable string properties and methods of an object.
{.desc}




**Signature:**

```ts
keys: <T extends PropertyKey>(val: Record<T, unknown>) => string[]
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | `Object`  that contains the properties and methods |

<code class="returns">=></code> The result of  `Object.keys(val)`

</details>

::: tip Remark
The order of the output array is not guaranteed to be consistent across different JS platforms.
:::

#### Example 

```ts
keys({}) // []
keys({ 'a': 'b' }) // ['a']
keys({ 0: 'hello', 1: 'world' }) // ['0', '1']
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { keys } from '../src/keys.ts'

Deno.test('keys', () => {
  const table: [Record<PropertyKey, unknown>, string[]][] = [
    [{}, []],
    [{ '': '' }, ['']],
    [{ '': undefined }, ['']],
    [{ '': null }, ['']],
    [{ '': 0 }, ['']],
    [{ a: 0 }, ['a']],
    [{ a: 0, b: 1 }, ['a', 'b']],
    [{ a: 0, b: 1, c: 2 }, ['a', 'b', 'c']],
    [{ 0: '' }, ['0']],
    [{ 0: '', 1: 'a' }, ['0', '1']],
    [{ '': {}, 1: [] }, ['1', '']]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(keys(val), expected, `keys(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/keys.ts)

---

### last

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Returns the last element of the given list or string.
{.desc}




**Signature:**

```ts
last: <T extends string | readonly unknown[]>(val: T) => Last<T>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | `string`  or any  `array`  object |

<code class="returns">=></code> The last element of the  `val`

</details>


#### Example 1

```ts
// String
last('hello') // 'o'
```

#### Example 2

```ts
// Array
last('hello', 'new', 'world') // 'world'
last([]) // undefined
last(['one', 2, 3, 4]) // 4
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { Last, last } from '../src/last.ts'
import { assertEqual } from './asserts.ts'

Deno.test('last', () => {
  const table: [string | unknown[], unknown][] = [
    ['', ''],
    ['a', 'a'],
    [' ab', 'b'],
    ['abcd', 'd'],
    ['abcde ', ' '],
    ['abcd_', '_'],
    [[], undefined],
    [[''], ''],
    [['hello', 'world'], 'world'],
    [['hello', 'new', 'world'], 'world'],
    [[['hello', 'new', 'world'], 'test'], 'test'],
    [
      [
        ['hello', 'new', 'world'],
        ['hello2', 'world']
      ],
      ['hello2', 'world']
    ],
    [[0], 0],
    [[0, 3, 6, 9], 9],
    [[{}], {}]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(last(val), expected, `last(${val}) -> ${expected}`)
  })

  assertEqual<undefined>(last([]))
  assertEqual<undefined>(last([] as const))
  assertEqual<undefined>(last([] as []))
  assertEqual<string>(last(['']))
  assertEqual<''>(last([''] as const))
  assertEqual<''>(last([''] as ['']))
  assertEqual<string | number>(last(['1', 2]))
  assertEqual<2>(last(['1', 2] as const))
  assertEqual<[]>(last([100, 200, 'hello', []] as [100, 200, 'hello', []]))
  assertEqual<string>(last(''))
  assertEqual<string>(last('hello'))
  assertEqual<string>(last('hello' as const))
})

Deno.test('Last', () => {
  assertEqual<undefined, Last<[] | never[] | readonly [] | readonly never[]>>()
  assertEqual<'', Last<[''] | readonly ['']>>()
  assertEqual<string, Last<string[]>>()
  assertEqual<string | number, Last<string | number[]>>()
  assertEqual<[], Last<[100, 200, 'hello', []]>>()
  assertEqual<string, Last<string>>()
  assertEqual<'', Last<''>>()
  assertEqual<'o', Last<'hello'>>()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/last.ts)

---

### length

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Returns the number of elements in the array or string length.
{.desc}




**Signature:**

```ts
length: <T extends string | unknown[]>(val: T) => T["length"]
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | `string`  or any  `array` |

<code class="returns">=></code> The result of  `val.length`

</details>


#### Example 

```ts
length('hello') // 5
length(['hello', 'world', 1]) // 3
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { length } from '../src/length.ts'

Deno.test('length', () => {
  const table: [unknown[] | string, number][] = [
    ['', 0],
    [' ', 1],
    ['  ', 2],
    ['a', 1],
    ['ab', 2],
    ['hello', 5],
    [[], 0],
    [[''], 1],
    [['', 0], 2],
    [['', 0, '1'], 3]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(length(val), expected, `length(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/length.ts)

---

### lowerCase

<small>Added from [1.0.1](./1.0.1/)</small>
{.my-1}




Return lowercase string.
{.desc}




**Signature:**

```ts
lowerCase: <T extends string>(val: T) => Lowercase<T>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input string value |

<code class="returns">=></code> Lowercase string

</details>


#### Example 

```ts
toLower('Hello') // hello
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { lowerCase } from '../src/lowerCase.ts'

Deno.test('lowerCase', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'hello'],
    ['HeLlo', 'hello'],
    ['hello', 'hello'],
    ['Hello World', 'hello world']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(lowerCase(val), expected, `lowerCase(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/lowerCase.ts)

---

### lt

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Returns `true` if the first argument is less than the second; otherwise `false`.
{.desc}




**Signature:**

```ts
lt: <T extends Ord>(a: T, b: T) => boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input value |
| `b` | The second input value |

<code class="returns">=></code> The result of  `a < b`

</details>


#### Example 1

```ts
// Number
lt(1, 2) // true
lt(2, 2) // false
```

#### Example 2

```ts
// Bigint
lt(1n, 2n) // true
lt(2n, 2n) // false
```

#### Example 3

```ts
// String
lt('a', 'z') // true
lt('a', 'a') // false
```

#### Example 4

```ts
// Boolean
lt(false, true) // true
lt(true, true) // false
lt(false, false) // false
lt(true, false) // false
```

#### Example 5

```ts
// Date
lt(new Date('1999/12/31'), new Date('2000/1/1')) // true
lt(new Date('2000/1/1'), new Date('2000/1/1')) // false
lt(new Date('2000/1/2'), new Date('2000/1/1')) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { lt } from '../src/lt.ts'
import { Ord } from '../src/types/index.ts'

Deno.test('lt', () => {
  const table: [Ord, Ord, boolean][] = [
    [0, 0, false],
    [1, 0, false],
    [0, 1, true],
    [0n, 0n, false],
    [1n, 0n, false],
    [0n, 1n, true],
    ['a', 'a', false],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'z', true],
    [true, true, false],
    [false, false, false],
    [true, false, false],
    [false, true, true],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), false],
    [new Date('2000/1/2'), new Date('2000/1/1'), false],
    [new Date('1999/12/31'), new Date('2000/1/1'), true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(lt(a, b), expected, `lt(${a}, ${b}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/lt.ts)

---

### lte

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Returns `true` if the first argument is less than or equal to the second; otherwise `false`.
{.desc}




**Signature:**

```ts
lte: <T extends Ord>(a: T, b: T) => boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input value |
| `b` | The second input value |

<code class="returns">=></code> The result of  `a <= b`

</details>


#### Example 1

```ts
// Number
lte(1, 2) // true
lte(2, 2) // true
lte(2, 1) // false
```

#### Example 2

```ts
// Bigint
lte(1n, 2n) // true
lte(2n, 2n) // true
lte(2n, 1n) // true
```

#### Example 3

```ts
// String
lte('a', 'z') // true
lte('a', 'a') // true
lte('z', 'a') // false
```

#### Example 4

```ts
// Boolean
lte(true, true) // true
lte(false, false) // true
lte(false, true) // true
lte(true, false) // false
```

#### Example 5

```ts
// Date
lte(new Date('2000/1/1'), new Date('2000/1/1')) // true
lte(new Date('1999/12/31'), new Date('2000/1/1')) // true
lte(new Date('2000/1/2'), new Date('2000/1/1')) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { lte } from '../src/lte.ts'
import { Ord } from '../src/types/index.ts'

Deno.test('lte', () => {
  const table: [Ord, Ord, boolean][] = [
    [1, 0, false],
    [0, 0, true],
    [0, 1, true],
    [1n, 0n, false],
    [0n, 0n, true],
    [0n, 1n, true],
    ['z', 'a', false],
    ['za', 'a', false],
    ['a', 'a', true],
    ['a', 'z', true],
    [true, false, false],
    [true, true, true],
    [false, false, true],
    [false, true, true],
    [new Date('2000/1/2'), new Date('2000/1/1'), false],
    [new Date('2000/1/1 00:00:00'), new Date('2000/1/1 00:00:00'), true],
    [new Date('1999/12/31'), new Date('2000/1/1'), true]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(lte(a, b), expected, `lte(${a}, ${b}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/lte.ts)

---

### multiply

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Multiplies first argument and second argument.
{.desc}




**Signature:**

```ts
multiply: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input number |
| `b` | The second input number |

<code class="returns">=></code> The result of  `a * b`

</details>


#### Example 1

```ts
// Basic
multiply(2, 3) // 6
```

#### Example 2

```ts
// Bigint
multiply(2n, 3n) // 6n
```

#### Example 3

```ts
// Curry
const double = multiply(2)
double(4) // 8
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/multiply.ts)

---

### not

<small>Added from [1.3.0](./1.3.0/)</small>
{.my-1}




Returns the `!` of its argument.
{.desc}




**Signature:**

```ts
not: <T>(val: T) => T extends Falsy ? true : boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | input any value |

<code class="returns">=></code> The result of  `!val`

</details>

::: tip Remark
The Definition of Falsy - `''` - `false` - `0` - `NaN` - `undefined` - `null`
:::

#### Example 

```ts
not('') // true
not(false) // true
not(0) // true
not(NaN) // true
not(undefined) // true
not(null) // true

not({}) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { not } from '../src/not.ts'
import { assertEqual } from './asserts.ts'

Deno.test('not', () => {
  const table: [unknown, boolean][] = [
    ['', true],
    [undefined, true],
    [null, true],
    [0, true],
    [NaN, true],
    [false, true],
    [[], false],
    [{}, false],
    ['hello', false],
    [Infinity, false],
    [1, false],
    [-1, false],
    [true, false]
  ]

  table.forEach(([val, expected]) => {
    assertEquals(not(val), expected, `not(${val}) -> ${expected}`)
  })

  assertEqual<true>(not('' as const))
  assertEqual<true>(not(0 as const))
  assertEqual<true>(not(false as const))
  assertEqual<true>(not(undefined))
  assertEqual<true>(not(null))
  assertEqual<boolean>(not(String))
  assertEqual<boolean>(not(Number))
  assertEqual<boolean>(not(NaN))
  assertEqual<boolean>(not(BigInt))
  assertEqual<boolean>(not(Symbol))
  assertEqual<boolean>(not(Date))
  assertEqual<boolean>(not(Object))
  assertEqual<boolean>(not(Array))
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/not.ts)

---

### or

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Returns true if one or both of its arguments are true; otherwise false.
{.desc}




**Signature:**

```ts
or: <T, U>(a: T, b: U) => T extends Falsy ? U extends Falsy ? false : boolean : boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input any value |
| `b` | The second input any value |

<code class="returns">=></code> The result of  `!!a || !!bb`

</details>


#### Example 

```ts
or(true, true) // true
or(false, true) // true
or(true, false) // true
or(false, false) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { or } from '../src/or.ts'
import { Falsy } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('or', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, true],
    [false, false, false]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(or(a, b), expected, `or(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<false>(or(false as Falsy, false as Falsy))
  assertEqual<boolean>(or(Boolean, Boolean))

  // Because Truthy can not define.
  assertEqual<boolean>(or(true as const, true as const))
  assertEqual<boolean>(or(true as const, Boolean))
  assertEqual<boolean>(or(Boolean, true as const))
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/or.ts)

---

### prepend

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Returns a new list with the given value at the front, followed by the contents of the list.
{.desc}




**Signature:**

```ts
prepend: <T, U>(val: T, list: U[]) => (T | U)[]
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | The value to add to the front of the new list |
| `list` | The list of elements to add a new item to |

<code class="returns">=></code> The result of  `[val, ...list]`

</details>


#### Example 

```ts
prepend('Tom', ['hello']) // ['Tom', 'hello']
prepend('Tom', []) // ['Tom']
prepend(['Tom'], ['hello', 'world']) // [['Tom'], 'hello', 'world']
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { prepend } from '../src/prepend.ts'

Deno.test('prepend', () => {
  const table: [unknown, unknown[], unknown[]][] = [
    [null, [], [null]],
    [undefined, [], [undefined]],
    ['', [], ['']],
    [{}, [], [{}]],
    [0, [], [0]],
    ['a', ['b'], ['a', 'b']],
    ['a', ['b', 'c', 'd'], ['a', 'b', 'c', 'd']],
    [[], [], [[]]],
    [[1], [], [[1]]],
    [[1], [2], [[1], 2]],
    [[1], [2, 3, 4], [[1], 2, 3, 4]]
  ]
  table.forEach(([val, list, expected]) => {
    assertEquals(
      prepend(val, list),
      expected,
      `prepend(${val}, ${list}) -> ${expected}`
    )
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/prepend.ts)

---

### product

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Multiplies together all the elements of a list.
{.desc}




**Signature:**

```ts
product: {
    (val: [
    ]): 0;
    (val: number[]): number;
    (val: bigint[]): bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | list An array of numbers |

<code class="returns">=></code> The product of all the numbers in the list

</details>


#### Example 

```ts
product([1, 2, 3, 4, 5]) // 120
product([1n, 2n, 3n, 4n, 5n]) //120n
product([]) // 0
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { product } from '../src/product.ts'

Deno.test('product', () => {
  const tableNumber: [number[], number][] = [
    [[], 0],
    [[0, 0], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 120],
    [[1, -2, 3, -4, 5], 120]
  ]

  tableNumber.forEach(([val, expected]) => {
    assertEquals(product(val), expected, `product(${val}) -> ${expected}`)
  })

  const tableBigint: [bigint[], bigint][] = [
    [[0n], 0n],
    [[1n], 1n],
    [[1n, 2n, 3n, 4n, 5n], 120n],
    [[1n, -2n, 3n, -4n, 5n], 120n]
  ]

  tableBigint.forEach(([val, expected]) => {
    assertEquals(product(val), expected, `product(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/product.ts)

---

### props

<small>Added from [1.4.0](./1.4.0/)</small>
{.my-1}




Returns a function that when supplied an object returns the indicated property of that object, if it exists.
{.desc}




**Signature:**

```ts
props: <T extends string | number, U extends Record<PropertyKey, unknown>>(val: T, obj: U) => U extends Record<T, unknown> ? U[T] : undefined
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input property key |
| `obj` | The object to query |

<code class="returns">=></code> The result of safety  `obj[val]`  or  `obj[val[0]][val[1]][val[...x]]`

</details>


#### Example 

```ts
props('x', { x: 'hello' }) // 'hello'
props(1, { 1: 100 }) // 100
props('x', {}) // undefined
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
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
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/props.ts)

---

### replace

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Replaces matches for `from` in string with `to`.
{.desc}




**Signature:**

```ts
replace: <From extends string, To extends string, T extends string>(from: From, to: To, val: T) => Replace<T, From, To>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `from` | Holds the pattern string that need to replace |
| `to` | Holds the replacement string |
| `val` | Original string |

<code class="returns">=></code> The result of  `val.replace(from, to)`

</details>


#### Example 

```ts
replace('hello Tom', 'Tom', 'Bob') // 'hello Bob'
replace('hogehoge', 'hoge', 'fuga') // 'fugahoge'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { Replace, replace } from '../src/replace.ts'
import { assertEqual } from './asserts.ts'

Deno.test('replace', () => {
  const table: [string, string, string, string][] = [
    ['', '', '', ''],
    ['hello', 'hello', '', ''],
    ['hoge', 'huga', '', ''],
    [' ', 'a', ' ', 'a'],
    [' ', 'a', '  ', 'a '],
    ['a', 'b', 'a', 'b'],
    ['a', 'b', 'aaa', 'baa'],
    ['Tom', 'Bob', 'hello Tom', 'hello Bob']
  ]
  table.forEach(([val, from, to, expected]) => {
    assertEquals(
      replace(val, from, to),
      expected,
      `replace(${val}, ${from}, ${to}) -> ${expected}`
    )
  })
})

Deno.test('types', () => {
  assertEqual<'', Replace<'', '', ''>>()
  assertEqual<'', Replace<'', 'a', 'a'>>()
  assertEqual<'a', Replace<'a', 'a', 'a'>>()
  assertEqual<'b', Replace<'a', 'a', 'b'>>()
  assertEqual<'baa', Replace<'aaa', 'a', 'b'>>()
  assertEqual<'hello Bob', Replace<'hello Tom', 'Tom', 'Bob'>>()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/replace.ts)

---

### replaceAll

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Replaces all matches for `from` in string with `to`.
{.desc}




**Signature:**

```ts
replaceAll: <From extends string, To extends string, T extends string>(from: From, to: To, val: T) => ReplaceAll<T, From, To>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `from` | Holds the pattern string that need to replace |
| `to` | Holds the replacement string |
| `val` | Original string |

<code class="returns">=></code> The result of  `val.replaceAll(from, to)`

</details>


#### Example 

```ts
replaceAll('hello Tom', 'Tom', 'Bob') // 'hello Bob'
replaceAll('hogehoge', 'hoge', 'fuga') // 'fugafuga'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { ReplaceAll, replaceAll } from '../src/replaceAll.ts'
import { assertEqual } from './asserts.ts'

Deno.test('replaceAll', () => {
  const table: [string, string, string, string][] = [
    ['', '', '', ''],
    ['hello', 'hello', '', ''],
    ['hoge', 'huga', '', ''],
    [' ', 'a', ' ', 'a'],
    [' ', 'a', '  ', 'aa'],
    ['a', 'b', 'a', 'b'],
    ['a', 'b', 'aaa', 'bbb'],
    ['Tom', 'Bob', 'hello Tom', 'hello Bob']
  ]
  table.forEach(([val, from, to, expected]) => {
    assertEquals(
      replaceAll(val, from, to),
      expected,
      `replaceAll(${val}, ${from}, ${to}) -> ${expected}`
    )
  })
})

Deno.test('types', () => {
  assertEqual<'', ReplaceAll<'', '', ''>>()
  assertEqual<'', ReplaceAll<'', 'a', 'a'>>()
  assertEqual<'a', ReplaceAll<'a', 'a', 'a'>>()
  assertEqual<'b', ReplaceAll<'a', 'a', 'b'>>()
  assertEqual<'bbb', ReplaceAll<'aaa', 'a', 'b'>>()
  assertEqual<'hello Bob', ReplaceAll<'hello Tom', 'Tom', 'Bob'>>()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/replaceAll.ts)

---

### reverse

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Returns a new list or string with the elements or characters in reverse order.
{.desc}




**Signature:**

```ts
reverse: {
    (val: string): string;
    (val: ""): "";
    <T extends [
    ]>(val: T): [
    ];
    <T extends unknown[]>(val: T): T;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | list or string characters |

<code class="returns">=></code> New list or string characters in reverse order

</details>


#### Example 1

```ts
// String
reverse('hello') // 'olleh'
```

#### Example 2

```ts
// Any Array
reverse(['hello', 'new', 'world']) // ['world', 'new', 'hello']
reverse([0, {}, []]) // [[], {}, 0]
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { reverse } from '../src/reverse.ts'

Deno.test('reverse', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const table: [string | any, string | any][] = [
    ['', ''],
    ['a', 'a'],
    ['abc', 'cba'],
    ['acegik', 'kigeca'],
    [[], []],
    [[''], ['']],
    [
      ['', 'hello', 'world'],
      ['world', 'hello', '']
    ],
    [
      [0, 'hello', 'world'],
      ['world', 'hello', 0]
    ],
    [
      [0, {}, []],
      [[], {}, 0]
    ],
    [
      [['hello', 'world'], {}, []],
      [[], {}, ['hello', 'world']]
    ]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(reverse(val), expected, `reverse(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/reverse.ts)

---

### startsWith

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Checks if a string starts with the provided substring.
{.desc}




**Signature:**

```ts
startsWith: <T extends string, U extends string | undefined = undefined>(val: T, target?: U | undefined) => StringWith<"startsWith", U>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | search string |
| `target` | target string |

<code class="returns">=></code> The result of  `target.startsWith(val)`

</details>


#### Example 1

```ts
// Basic
startsWith('hello', 'hello world') // true
startsWith('good', 'hello world') // false
```

#### Example 2

```ts
// Curry
const startWithSlash = startsWith('/')
startWithSlash('/path/to') // true
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/startsWith.ts)

---

### subtract

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Subtracts its second argument from its first argument.
{.desc}




**Signature:**

```ts
subtract: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
} & {
    (a: typeof _, b: number): (a: number) => number;
    (a: typeof _, b: bigint): (a: bigint) => bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input number |
| `b` | The second input number |

<code class="returns">=></code> The result of  `a - b`

</details>

::: tip Remark
Since subtraction is not idempotent, there are two ways to curry.
:::

#### Example 1

```ts
// Number
subtract(2, 1) // 1
```

#### Example 2

```ts
// Bigint
subtract(3n, 2n) //1n
```

#### Example 3

```ts
// First argument curry
const from5Minus = subtract(5)
from5Minus(10) // -5
```

#### Example 4

```ts
// Second argument curry
import { _ } from 'fonction'
const minus5 = (_, 5)
minus5(20) // 15
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/subtract.ts)

---

### sum

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Adds together all the elements of a list.
{.desc}




**Signature:**

```ts
sum: {
    (val: [
    ]): 0;
    (val: number[]): number;
    (val: bigint[]): bigint;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | list An array of numbers |

<code class="returns">=></code> The sum of all the numbers in the list

</details>


#### Example 

```ts
sum([1, 2, 3, 4, 5]) // 15
sum([1n, 2n, 3n, 4n, 5n]) // 15n
sum([]) // 0
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { sum } from '../src/sum.ts'

Deno.test('sum', () => {
  const tableNumber: [number[], number][] = [
    [[], 0],
    [[0, 0], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 15],
    [[1, -2, 3, -4, 5], 3]
  ]
  tableNumber.forEach(([val, expected]) => {
    assertEquals(sum(val), expected, `sum(${val}) -> ${expected}`)
  })

  const tableBigint: [bigint[], bigint][] = [
    [[0n, 0n], 0n],
    [[1n], 1n],
    [[1n, 2n, 3n, 4n, 5n], 15n],
    [[1n, -2n, 3n, -4n, 5n], 3n]
  ]

  tableBigint.forEach(([val, expected]) => {
    assertEquals(sum(val), expected, `sum(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/sum.ts)

---

### T

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




A function that always returns `true`. Any passed in parameters are ignored.
{.desc}




**Signature:**

```ts
T: AnyFn<unknown, true>
```

<details class="parameters-detail">
<summary>Parameters</summary>


<code class="returns">=></code>  `True`

</details>


#### Example 

```ts
T() // true
T(1, 'hello', 'world') // true
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { T } from '../src/T.ts'
import { assertReturnType } from './asserts.ts'

Deno.test('T', () => {
  const table: unknown[] = [
    [''],
    [1, 2, 3],
    [{}, [], undefined, null],
    [undefined],
    [null]
  ]
  table.forEach((val) => {
    assertEquals(T(val), true, `T(${val}) -> true`)
  })

  assertReturnType<true>(T)
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/T.ts)

---

### tail

<small>Added from [1.2.0](./1.2.0/)</small>
{.my-1}




Returns all but the first element of the given list or string.
{.desc}




**Signature:**

```ts
tail: {
    (val: string): string;
    <T extends unknown[]>(val: T): T;
}
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | string or any array object |

<code class="returns">=></code> The result of  `val.slice(1, Infinity)`

</details>


#### Example 1

```ts
// String
tail('hello') // 'ello'
tail('h') // ''
tail('') // ''
```

#### Example 2

```ts
tail([1, 2, 3]) // [2, 3]
tail(['hello', 'world']) // ['world']
tail(['hello']) // []
tail([]) // []
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { tail } from '../src/tail.ts'

Deno.test('tail', () => {
  const tableString: [string, string][] = [
    ['', ''],
    ['a', ''],
    ['ab', 'b'],
    ['abc', 'bc']
  ]
  tableString.forEach(([val, expected]) => {
    assertEquals(tail(val), expected, `tail(${val}) -> ${expected}`)
  })

  const tableArray: [unknown[], unknown[]][] = [
    [[], []],
    [[''], []],
    [[undefined], []],
    [[null], []],
    [[0], []],
    [['', ''], ['']],
    [[0, 0], [0]],
    [[0, ''], ['']],
    [['hello', 'world'], ['world']],
    [
      ['hello', 'new', 'world'],
      ['new', 'world']
    ],
    [
      [undefined, null, 'hello', 'world'],
      [null, 'hello', 'world']
    ],
    [[['hello', 'world']], []]
  ]

  tableArray.forEach(([val, expected]) => {
    assertEquals(tail(val), expected, `tail(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/tail.ts)

---

### trim

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Removes whitespace from both ends of the string.
{.desc}




**Signature:**

```ts
trim: <T extends string>(val: T) => TrimLeft<TrimRight<T>>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | `string`  to trim |

<code class="returns">=></code> The result of  `val.trim()`

</details>


#### Example 

```ts
trim('   hello   ') // 'hello'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { Trim, trim } from '../src/trim.ts'
import { assertEqual } from './asserts.ts'

Deno.test('trim', () => {
  const table: [string, string][] = [
    ['', ''],
    ['         ', ''],
    ['\n\n', ''],
    ['\t\t\t\t', ''],
    ['hello', 'hello'],
    [' hello', 'hello'],
    ['hello ', 'hello'],
    [' hello ', 'hello'],
    ['   hello   ', 'hello'],
    ['   hello  world  ', 'hello  world'],
    ['   hello  world\n\n', 'hello  world']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(trim(val), expected, `trim(${val}) -> ${expected}`)
  })
})

Deno.test('types', () => {
  assertEqual<'', Trim<''>>()
  assertEqual<'hello', Trim<'hello'>>()
  assertEqual<'', Trim<'\n'>>()
  assertEqual<'', Trim<'\t'>>()
  assertEqual<'', Trim<'\t\n '>>()
  assertEqual<'hello', Trim<'hello '>>()
  assertEqual<'hello', Trim<'\n\t hello\n\t '>>()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/trim.ts)

---

### trimLeft

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Removes space from left ends of the string.
{.desc}




**Signature:**

```ts
trimLeft: <T extends string>(val: T) => TrimLeft<T>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | input string |

<code class="returns">=></code> The result of  `val.trimLeft()`

</details>

::: tip Remark
The definition of space - `''` - `\n` - `\t`
:::

#### Example 

```ts
trimLeft('   hello') // 'hello'
trimLeft(' \n\thello') // 'hello'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { TrimLeft, trimLeft } from '../src/trimLeft.ts'
import { assertEqual } from './asserts.ts'

Deno.test('trimLeft', () => {
  const table: [string, string][] = [
    ['', ''],
    ['         ', ''],
    ['\n\n', ''],
    ['\t\t\t\t', ''],
    ['hello', 'hello'],
    [' hello', 'hello'],
    ['hello ', 'hello '],
    [' hello ', 'hello '],
    ['   hello   ', 'hello   '],
    ['   hello  world  ', 'hello  world  '],
    ['   hello  world\n\n', 'hello  world\n\n']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(trimLeft(val), expected, `trimLeft(${val}) -> ${expected}`)
  })
})

Deno.test('types', () => {
  assertEqual<'', TrimLeft<''>>()
  assertEqual<'hello', TrimLeft<'hello'>>()
  assertEqual<'', TrimLeft<'\n'>>()
  assertEqual<'', TrimLeft<'\t'>>()
  assertEqual<'', TrimLeft<'\t\n '>>()
  assertEqual<'hello ', TrimLeft<'hello '>>()
  assertEqual<'hello\n\t ', TrimLeft<'\n\t hello\n\t '>>()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/trimLeft.ts)

---

### trimRight

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Removes space from right ends of the string.
{.desc}




**Signature:**

```ts
trimRight: <T extends string>(val: T) => TrimRight<T>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | input string |

<code class="returns">=></code> The result of  `val.trimRight()`

</details>

::: tip Remark
The definition of space - `''` - `\n` - `\t`
:::

#### Example 

```ts
trimRight('hello   ') // 'hello'
trimRight('hello \n\t') // 'hello'
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { TrimRight, trimRight } from '../src/trimRight.ts'
import { assertEqual } from './asserts.ts'

Deno.test('trimRight', () => {
  const table: [string, string][] = [
    ['', ''],
    ['         ', ''],
    ['\n\n', ''],
    ['\t\t\t\t', ''],
    ['hello', 'hello'],
    [' hello', ' hello'],
    ['hello ', 'hello'],
    [' hello ', ' hello'],
    ['   hello   ', '   hello'],
    ['   hello  world  ', '   hello  world'],
    ['   hello  world\n\n', '   hello  world']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(trimRight(val), expected, `trimRight(${val}) -> ${expected}`)
  })
})

Deno.test('types', () => {
  assertEqual<'', TrimRight<''>>()
  assertEqual<'hello', TrimRight<'hello'>>()
  assertEqual<'', TrimRight<'\n'>>()
  assertEqual<'', TrimRight<'\t'>>()
  assertEqual<'', TrimRight<'\t\n '>>()
  assertEqual<'hello', TrimRight<'hello '>>()
  assertEqual<'\n\t hello', TrimRight<'\n\t hello\n\t '>>()
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/trimRight.ts)

---

### upperCase

<small>Added from [1.0.1](./1.0.1/)</small>
{.my-1}




Return uppercase string.
{.desc}




**Signature:**

```ts
upperCase: <T extends string>(val: T) => Uppercase<T>
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | Input string value |

<code class="returns">=></code> Uppercase string

</details>


#### Example 

```ts
toUpper('Hello') // HELLO
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { upperCase } from '../src/upperCase.ts'

Deno.test('upperCase', () => {
  const table: [string, string][] = [
    ['', ''],
    ['Hello', 'HELLO'],
    ['hello', 'HELLO'],
    ['Hello World', 'HELLO WORLD']
  ]
  table.forEach(([val, expected]) => {
    assertEquals(upperCase(val), expected, `upperCase(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/upperCase.ts)

---

### values

<small>Added from [1.3.0](./1.3.0/)</small>
{.my-1}




Returns an array of values of the enumerable properties of an object.
{.desc}




**Signature:**

```ts
values: <T extends unknown>(val: Record<PropertyKey, T> | ArrayLike<T>) => T[]
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `val` | `Object`  that contains the properties and methods |

<code class="returns">=></code> The result of  `Object.values(val)`

</details>

::: tip Remark
The order of the output array is not guaranteed to be consistent across different platforms.
:::

#### Example 1

```ts
// Object
values({}) // []
values({ 'a': 'b' }) // ['b']
values({ 0: 'hello', 1: 'world' }) // ['hello', 'world']
```

#### Example 2

```ts
// Array
values([]) // []
values(['hello', 'world']) // ['hello', 'world']
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { values } from '../src/values.ts'

Deno.test('values', () => {
  const table: [Record<PropertyKey, unknown> | ArrayLike<any>, any[]][] = [
    [{}, []],
    [{ '': '' }, ['']],
    [{ '': undefined }, [undefined]],
    [{ '': null }, [null]],
    [{ '': 0 }, [0]],
    [{ a: 0 }, [0]],
    [{ a: 0, b: 1 }, [0, 1]],
    [{ a: 0, b: 1, c: 2 }, [0, 1, 2]],
    [{ 0: '' }, ['']],
    [{ 0: '', 1: 'a' }, ['', 'a']],
    [{ '': {}, 1: [] }, [[], {}]],
    [[], []],
    [[''], ['']],
    [[0], [0]],
    [[null], [null]],
    [[undefined], [undefined]],
    [
      ['hello', 'world'],
      ['hello', 'world']
    ]
  ]
  table.forEach(([val, expected]) => {
    assertEquals(values(val), expected, `values(${val}) -> ${expected}`)
  })
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/values.ts)

---

### xor

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Returns true if one of the arguments is truthy and the other is falsy; otherwise false.
{.desc}




**Signature:**

```ts
xor: <T, U>(a: T, b: U) => T extends Falsy ? U extends Falsy ? false : boolean : boolean
```

<details class="parameters-detail">
<summary>Parameters</summary>

| Parameter | Description |
| --------- | ----------- |
| `a` | The first input any value |
| `b` | The second input any value |

<code class="returns">=></code> The result of  `!a !== !b`

</details>


#### Example 

```ts
xor(true, false) // true
xor(false, true) // true
xor(true, true) // false
xor(false, false) // false
```


<details>
<summary>Tests</summary>

```ts
import { assertEquals } from '../deps.ts'
import { xor } from '../src/xor.ts'
import { Falsy } from './../src/types/index.ts'
import { assertEqual } from './asserts.ts'

Deno.test('xor', () => {
  const table: [unknown, unknown, boolean][] = [
    [false, true, true],
    [true, false, true],
    [true, true, false],
    [false, false, false]
  ]
  table.forEach(([a, b, expected]) => {
    assertEquals(xor(a, b), expected, `xor(${a}, ${b}) -> ${expected}`)
  })

  assertEqual<false>(xor(false as Falsy, false as Falsy))
  assertEqual<boolean>(xor(Boolean, Boolean))

  // Because Truthy can not define.
  assertEqual<boolean>(xor(true as const, true as const))
  assertEqual<boolean>(xor(true as const, Boolean))
  assertEqual<boolean>(xor(Boolean, true as const))
})
```

</details>

 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/xor.ts)

---


## Types

### AnyFn

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Type of any function
{.desc}




**Signature:**

```ts
type AnyFn<T = any, U = unknown> = (...args: T[]) => U;
```





 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/AnyFn.ts)

---

### Empty

<small>Added from [1.3.0](./1.3.0/)</small>
{.my-1}




Alias for Empty values
{.desc}




**Signature:**

```ts
type Empty = "" | [
] | {};
```





 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Empty.ts)

---

### Falsy

<small>Added from [1.3.0](./1.3.0/)</small>
{.my-1}




Alias for Falsy values
{.desc}




**Signature:**

```ts
type Falsy = false | "" | 0 | null | undefined;
```





 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Falsy.ts)

---

### First

<small>Added from [1.4.0](./1.4.0/)</small>
{.my-1}




Infer the first types.
{.desc}




**Signature:**

```ts
type First<T extends readonly unknown[] | string> = T extends "" ? "" : T extends string ? String2Array<T> extends [
] ? string : String2Array<T>[0] : T extends readonly never[] | [
] ? undefined : T[0];
```

<details class="parameters-detail">
<summary>Parameters</summary>


<code class="returns">=></code> First element of the  `T`

</details>


#### Example 1

```ts
// String
First<string> // string
First<''> // ''
First<'hello'> // 'h'
```

#### Example 2

```ts
// Array
First<[] | never[] | readonly [] | readonly never[]> // undefined
First<['hello', 'world']> // 'hello'
First<string | number[]> // string | number
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/First.ts)

---

### FlattenDeep

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Infer deep flatted array.
{.desc}




**Signature:**

```ts
type FlattenDeep<T extends readonly unknown[]> = T extends readonly [
    infer A,
    ...infer Rest
] ? A extends readonly unknown[] ? [
    ...FlattenDeep<A>,
    ...FlattenDeep<Rest>
] : [
    A,
    ...FlattenDeep<Rest>
] : [
    ...T
];
```

<details class="parameters-detail">
<summary>Parameters</summary>


<code class="returns">=></code> Deep flatted array

</details>


#### Example 

```ts
FlattenDeep<[]> // []
FlattenDeep<[[1, [2, [3, [4]], 5]]> // [1, 2, 3, 4, 5]
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/FlattenDeep.ts)

---

### Last

<small>Added from [1.4.0](./1.4.0/)</small>
{.my-1}




Infer the last types.
{.desc}




**Signature:**

```ts
type Last<T extends string | readonly unknown[]> = T extends "" ? "" : T extends string ? String2Array<T> extends [
] ? string : [
    never,
    ...String2Array<T>
][String2Array<T>["length"]] : T extends never[] | readonly never[] ? undefined : T extends unknown[] | readonly unknown[] ? [
    never,
    ...T
][T["length"]] : T extends string ? string : never;
```



#### Example 1

```ts
// String
Last<string> // string
Last<''> // ''
Last<'hello'> // 'o'
```

#### Example 2

```ts
// Array
Last<[] | never[] | readonly [] | readonly never[]> // undefined
Last<['hello', 'world']> // 'world'
Last<string | number[]> // string | number
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Last.ts)

---

### Ord

<small>Added from [1.1.0](./1.1.0/)</small>
{.my-1}




Abbreviation for Ordinal
{.desc}




**Signature:**

```ts
type Ord = string | number | bigint | boolean | Date;
```





 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Ord.ts)

---

### Primitive

<small>Added from [1.0.0](./1.0.0/)</small>
{.my-1}




Alias for Primitive values types
{.desc}




**Signature:**

```ts
type Primitive = string | number | bigint | boolean | symbol | undefined | null;
```





 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Primitive.ts)

---

### Replace

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Infer the replacement value.
{.desc}




**Signature:**

```ts
type Replace<T extends string, From extends string, To extends string> = From extends "" | To ? T : T extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : T;
```



#### Example 

```ts
Replace<'hello Tom', 'Tom', 'Bob'> // 'hello Bob'
Replace<'hogehoge', 'hoge', 'fuga'> // 'fugahoge'
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Replace.ts)

---

### ReplaceAll

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Infer the all replacement value.
{.desc}




**Signature:**

```ts
type ReplaceAll<T extends string, From extends string, To extends string> = From extends "" | To ? T : T extends `${infer L}${From}${infer R}` ? `${L}${ReplaceAll<`${To}${R}`, From, To>}` : T;
```



#### Example 

```ts
ReplaceAll<'hello Tom', 'Tom', 'Bob'> // 'hello Bob'
ReplaceAll<'hogehoge', 'hoge', 'fuga'> // 'fugafuga'
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/ReplaceAll.ts)

---

### Space

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Alias for Space values.
{.desc}




**Signature:**

```ts
type Space = " " | "\n" | "\t";
```





 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Space.ts)

---

### Trim

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Infer the trimmed string.
{.desc}




**Signature:**

```ts
type Trim<T extends string> = TrimLeft<TrimRight<T>>;
```

<details class="parameters-detail">
<summary>Parameters</summary>


<code class="returns">=></code> Trimmed string

</details>

::: tip Remark
The definition of space - `''` - `\n` - `\t`
:::

#### Example 

```ts
Trim<'\t\n hello \t\n'> // 'hello'
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/Trim.ts)

---

### TrimLeft

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Infer the string with the left ends of trimmed.
{.desc}




**Signature:**

```ts
type TrimLeft<T extends string> = T extends `${Space}${infer R}` ? TrimLeft<R> : T;
```

<details class="parameters-detail">
<summary>Parameters</summary>


<code class="returns">=></code> String left ends of trimmed

</details>

::: tip Remark
The definition of space - `''` - `\n` - `\t`
:::

#### Example 

```ts
TrimLeft<' \n\thello'> // 'hello'
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/TrimLeft.ts)

---

### TrimRight

<small>Added from [1.5.0](./1.5.0/)</small>
{.my-1}




Infer the string with the right ends of trimmed.
{.desc}




**Signature:**

```ts
type TrimRight<T extends string> = T extends `${infer R}${Space}` ? TrimRight<R> : T;
```

<details class="parameters-detail">
<summary>Parameters</summary>


<code class="returns">=></code> String right ends of trimmed

</details>

::: tip Remark
The definition of space - `''` - `\n` - `\t`
:::

#### Example 

```ts
TrimRight<'hello \n\t'> // 'hello'
```



 [View source on GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/src/TrimRight.ts)

---

