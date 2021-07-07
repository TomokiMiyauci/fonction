// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { head } from '../common/head.ts'
import { isNumber, isUndefined } from '../deps.ts'
import { ifElse } from './ifElse.ts'
import { multiply } from './multiply.ts'
/**
 * Multiplies together all the elements of a list.
 *
 * @param val - list An array of numbers
 * @returns The product of all the numbers in the list
 *
 * @example
 * ```ts
 * product([1, 2, 3, 4, 5]) // 120
 * product([1n, 2n, 3n, 4n, 5n]) //120n
 * product([]) // 0
 * ```
 *
 * @category `Math`
 *
 * @public
 */
const product: {
  (val: []): 0
  (val: number[]): number
  (val: bigint[]): bigint
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: any) => {
  const _head = head(val) as number | bigint | undefined
  return ifElse(isUndefined(_head), 0, () => {
    const init = ifElse(isNumber(_head), 1, 1n)
    return val.reduce(multiply, init)
  })
}

export { product }
