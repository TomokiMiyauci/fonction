<!-- Do not edit this file. It is automatically generated by API Documenter. -->



## product variable

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Multiplies together all the elements of a list.

<b>Signature:</b>

```typescript
product: {
    (val: [
    ]): 0;
    (val: number[]): number;
    (val: bigint[]): bigint;
}
```

## Example


```ts
product([1, 2, 3, 4, 5]) // 120
product([1n, 2n, 3n, 4n, 5n]) //120n
product([]) // 0

```
