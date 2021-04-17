<!-- Do not edit this file. It is automatically generated by API Documenter. -->



## divide variable

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Divide input two arguments.

<b>Signature:</b>

```typescript
divide: <T extends number | bigint, U extends (T extends number ? number : T extends bigint ? bigint : never) | undefined = undefined>(a: T, b?: U | undefined) => U extends undefined ? (b: T extends number ? number : T extends bigint ? bigint : never) => T extends number ? number : T extends bigint ? bigint : never : U extends (T extends number ? number : T extends bigint ? bigint : never) ? T extends number ? number : T extends bigint ? bigint : never : never
```

## Remarks

Note that when use curry, divide second argument from first argument.

## Example 1


```ts
// Basic
divide(10, 100) // 0.1

```

## Example 2


```ts
// Bigint
divide(100n, 100n) // 1n

```

## Example 3


```ts
// Curry
const half = divide(2)
half(20) // 10

```
