// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { add } from './add.ts'
import { first } from './first.ts'
import { ifElse } from './ifElse.ts'
import { isNumber } from './isNumber.ts'
import { isUndefined } from './isUndefined.ts'
/**
 * Adds together all the elements of a list.
 *
 * @param val - list An array of numbers
 * @returns The sum of all the numbers in the list
 *
 * @example
 * ```ts
 * sum([1, 2, 3, 4, 5]) // 15
 * sum([1n, 2n, 3n, 4n, 5n]) // 15n
 * sum([]) // 0
 * ```
 *
 * @category `Math`
 *
 * @public
 */
const sum: {
  (val: []): 0
  (val: number[]): number
  (val: bigint[]): bigint
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: any) => {
  const head = first(val) as number | bigint | undefined
  return ifElse(isUndefined(head), 0, () => {
    const init = ifElse(isNumber(head), 0, 0n)
    return val.reduce(add, init)
  })
}

export { sum }
