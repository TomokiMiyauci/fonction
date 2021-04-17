<!-- Do not edit this file. It is automatically generated by API Documenter. -->



## subtract variable

Subtracts second argument from first argument.

<b>Signature:</b>

```typescript
subtract: {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
    (a: bigint, b: bigint): bigint;
    (a: bigint): (b: bigint) => bigint;
}
```

## Example 1


```ts
// Basic
subtract(2, 1) // 1

```

## Example 2


```ts
// Bigint
subtract(2n, 1n) // 1n

```

## Example 3


```ts
// Curry
const minus5 = subtract(5)
minus5(10) // 5

```
