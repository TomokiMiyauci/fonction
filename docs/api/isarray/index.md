<!-- Do not edit this file. It is automatically generated by API Documenter. -->



## isArray variable

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Whatever argument is `Array` or not.

<b>Signature:</b>

```typescript
isArray: (val: unknown) => val is any[]
```

## Example


```ts
isArray([]) // true
isArray(['hello', 'world']) // true
isArray({}) // false

```
