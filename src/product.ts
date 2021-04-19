import { first } from '@/first'
import { isNumber } from '@/isNumber'
import { isUndefined } from '@/isUndefined'
import { multiply } from '@/multiply'

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
 * @beta
 */
const product: {
  (val: number[]): number
  (val: bigint[]): bigint
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (val: any) => {
  const head = first(val) as number | bigint
  if (isUndefined(head)) return 0
  const init = isNumber(head) ? 1 : 1n

  return val.reduce(multiply, init)
}

export { product }
