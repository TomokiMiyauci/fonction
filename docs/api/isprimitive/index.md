<!-- Do not edit this file. It is automatically generated by API Documenter. -->



## isPrimitive variable

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Whatever argument is primitive or not.

<b>Signature:</b>

```typescript
isPrimitive: (val: unknown) => val is Primitive
```

## Remarks

Definition of Primitive - string - number - bigint - boolean - symbol - undefined - null

## Example


```ts
isPrimitive(true) // true
isPrimitive([]) // false

```
