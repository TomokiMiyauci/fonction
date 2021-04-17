<!-- Do not edit this file. It is automatically generated by API Documenter. -->



## multiply variable

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Multiplies first argument and second argument.

<b>Signature:</b>

```typescript
multiply: <T extends number | bigint, U extends (T extends number ? number : T extends bigint ? bigint : never) | undefined = undefined>(a: T, b?: U | undefined) => U extends undefined ? (b: T extends number ? number : T extends bigint ? bigint : never) => T extends number ? number : T extends bigint ? bigint : never : U extends (T extends number ? number : T extends bigint ? bigint : never) ? T extends number ? number : T extends bigint ? bigint : never : never
```

## Example 1


```ts
// Basic
multiply(2, 3) // 6

```

## Example 2


```ts
// Bigint
multiply(2n, 3n) // 6n

```

## Example 3


```ts
// Curry
const double = multiply(2)
double(4) // 8

```
