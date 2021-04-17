<!-- Do not edit this file. It is automatically generated by API Documenter. -->



## isObject variable

Whatever argument is type of object or not.

<b>Signature:</b>

```typescript
isObject: <T extends unknown>(val: T) => val is T
```

## Remarks

Definition of Primitive - string - number - bigint - boolean - symbol - undefined - null

## Example


```ts
isObject([]) // true
isObject('hello') // false

```
